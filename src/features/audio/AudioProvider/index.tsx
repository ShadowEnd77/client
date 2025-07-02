import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useRef,
    ReactNode,
} from 'react';

type AudioInstance = {
    id: string;
    audio: HTMLAudioElement;
    isPlaying: boolean;
    volume: number;
    error: string | null;
};

type AudioContextType = {
    play: (id: string) => void;
    pause: (id: string) => void;
    setVolume: (id: string, volume: number) => void;
    loadTrack: (id: string, audioPath: string) => void;
    getAudioState: (id: string) => {
        isPlaying: boolean;
        error: string | null;
        volume: number;
        currentTrack: string | null;
    };
    getAllAudioInstances: () => Record<string, AudioInstance>;
    deleteInstances: () => void
};

export const AudioContext = createContext<AudioContextType>({
    play: function (id: string): void {
        throw new Error('Function not implemented.');
    },
    pause: function (id: string): void {
        throw new Error('Function not implemented.');
    },
    setVolume: function (id: string, volume: number): void {
        throw new Error('Function not implemented.');
    },
    loadTrack: function (id: string, audioPath: string): void {
        throw new Error('Function not implemented.');
    },
    getAudioState: function (id: string): {
        isPlaying: boolean;
        error: string | null;
        volume: number;
        currentTrack: string | null;
    } {
        throw new Error('Function not implemented.');
    },
    getAllAudioInstances: function (): Record<string, AudioInstance> {
        throw new Error('Function not implemented.');
    },
    deleteInstances: function () {

    }
});

type AudioProviderProps = {
    children: ReactNode;
    initialTracks?: Record<string, { path: string; volume?: number }>;
};

export const AudioProvider: React.FC<AudioProviderProps> = ({
    children,
    initialTracks = {},
}) => {
    const audioInstances = useRef<Record<string, AudioInstance>>({});

    const [_, forceUpdate] = useState({}); // Для принудительного ререндера

    const handleError = (id: string, error: Event) => {
        const target = error.target as HTMLAudioElement;
        audioInstances.current[id].error = `Audio error: ${target.error?.message || 'Unknown error'}`;
        audioInstances.current[id].isPlaying = false;
        forceUpdate({});
    };

    const loadTrack = (id: string, audioPath: string) => {
        // Если инстанс уже существует, очищаем его
        if (audioInstances.current[id]) {
            audioInstances.current[id].audio.pause();
            audioInstances.current[id].audio.removeEventListener('error', (e) => handleError(id, e));
        }

        const audio = new Audio(audioPath);
        audio.loop = true;
        audio.volume = audioInstances.current[id]?.volume || 0.5;

        audio.addEventListener('error', (e) => handleError(id, e));

        audioInstances.current = {
            ...audioInstances.current,
            [id]: {
                id,
                audio,
                isPlaying: false,
                volume: audioInstances.current[id]?.volume || 0.5,
                error: null,
            }
        };

        console.log(audioInstances.current[id]);


        forceUpdate({});
    };

    const play = (id: string) => {
        const instance = audioInstances.current[id];
        console.log(audioInstances.current);

        if (!instance) {
            console.error(`Audio instance with id ${id} not found`);
            return;
        }

        instance.audio.play()
            .then(() => {
                instance.isPlaying = true;
                instance.error = null;
                forceUpdate({});
            })
            .catch((err) => {
                instance.error = `Playback failed: ${err instanceof Error ? err.message : String(err)}`;
                instance.isPlaying = false;
                forceUpdate({});
            });

    };

    const pause = (id: string) => {
        const instance = audioInstances.current[id];
        if (instance) {
            instance.audio.pause();
            instance.isPlaying = false;
            instance.error = null;
            forceUpdate({});
        }
    };

    const deleteInstances = () => {
        Object.values(audioInstances.current).forEach((instance) => {
            instance.audio.pause();
            instance.audio.removeEventListener('error', (e) => handleError(instance.id, e));
        });
        audioInstances.current = {}
    }

    const setVolume = (id: string, newVolume: number) => {
        const instance = audioInstances.current[id];
        if (instance) {
            const clampedVolume = Math.max(0, Math.min(1, newVolume));
            instance.volume = clampedVolume;
            instance.audio.volume = clampedVolume;
            forceUpdate({});
        }
    };

    const getAudioState = (id: string) => {
        const instance = audioInstances.current[id];
        if (!instance) {
            return {
                isPlaying: false,
                error: `Audio instance ${id} not found`,
                volume: 0.5,
                currentTrack: null,
            };
        }

        return {
            isPlaying: instance.isPlaying,
            error: instance.error,
            volume: instance.volume,
            currentTrack: instance.audio.src,
        };
    };

    const getAllAudioInstances = () => {
        return { ...audioInstances.current };
    };

    // Инициализация
    useEffect(() => {
        // Загрузка начальных треков
        Object.entries(initialTracks).forEach(([id, { path, volume = 0.5 }]) => {
            loadTrack(id, path);
            setVolume(id, volume);
        });

        return deleteInstances
    }, []);



    return (
        <AudioContext.Provider
            value={{
                play,
                deleteInstances,
                pause,
                setVolume,
                loadTrack,
                getAudioState,
                getAllAudioInstances,
            }}
        >
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = (): AudioContextType => {
    const context = useContext(AudioContext);
    if (context === undefined) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};