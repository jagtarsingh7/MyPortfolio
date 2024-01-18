import React, { useRef, useEffect } from 'react';

function Music() {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {

        try {
           
            const audioContext = new (window.AudioContext || window.AudioContext)()
            const audioElement = audioRef.current;

            if (!audioElement) {
                throw new Error('Audio element not found');
            }
            const source = audioContext.createMediaElementSource(audioElement);
            // Set up your Three.js scene and use the audioContext to synchronize with the 3D elements
            audioElement.play();
        } catch (error) {
            console.error('Error in audio:', error);
        }

    }, []);

    return (

        // <audio ref={audioRef} controls>
        //     <source src="/assets/spaceSound.mp3" type="audio/mp3" />
        //     Your browser does not support the audio tag.
        // </audio>
        <>
        </>

    );
};

export default Music;
