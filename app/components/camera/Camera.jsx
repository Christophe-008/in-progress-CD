"use client";

import { useRef, useState, useEffect } from "react";

export default function CameraCapture() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [photo, setPhoto] = useState(null);
    const [facingMode, setFacingMode] = useState("user"); // Caméra avant par défaut
    const [stream, setStream] = useState(null);
    const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });

    // Démarrer la caméra avec la meilleure résolution possible
    const startCamera = async () => {
        try {
            if (stream) {
                stopCamera();
            }

            const newStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: facingMode,
                    width: { ideal: 9999 },
                    height: { ideal: 9999 },
                },
            });

            if (videoRef.current) {
                videoRef.current.srcObject = newStream;
                setStream(newStream);

                // Attendre le chargement pour récupérer la vraie résolution
                videoRef.current.onloadedmetadata = () => {
                    setVideoSize({
                        width: videoRef.current.videoWidth,
                        height: videoRef.current.videoHeight,
                    });
                };
            }
        } catch (error) {
            console.error("Erreur caméra :", error);
        }
    };

    // Arrêter la caméra
    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach((track) => track.stop());
            setStream(null);
        }
    };

    // 📌 🔄 Relancer la caméra quand `facingMode` change
    useEffect(() => {
        startCamera();
    }, [facingMode]); // Dès que `facingMode` change, la caméra redémarre

    // Capturer une photo en haute résolution
    const takePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");

            canvas.width = videoSize.width;
            canvas.height = videoSize.height;
            context.drawImage(video, 0, 0, videoSize.width, videoSize.height);

            const imageData = canvas.toDataURL("image/jpeg", 1.0);
            setPhoto(imageData);

            const link = document.createElement("a");
            link.href = imageData;
            link.download = "photo_capture.jpg";
            link.click();
        }
    };

    // 📌 ✅ ✅ Changer la caméra proprement sans clignotement
    const toggleCamera = () => {
        setFacingMode((prevMode) =>
            prevMode === "user" ? "environment" : "user"
        );
    };

    return (
        <div className="grid-container">
            <div className="grid-x grid-padding-x align-center">
                <div className="cell small-12 medium-8 large-6">
                    <h2 className="text-center">📸 Capture de photo</h2>

                    {videoSize.width > 0 && (
                        <p className="text-center">
                            📏 Résolution: {videoSize.width} x{" "}
                            {videoSize.height}
                        </p>
                    )}

                    <div
                        className="callout primary text-center"
                        style={{ overflow: "hidden" }}
                    >
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            className="w-full border rounded"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "400px",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    <div className="grid-x grid-margin-x">
                        <div className="cell small-6">
                            <button
                                onClick={startCamera}
                                className="button success expanded"
                            >
                                🎥 Activer la caméra
                            </button>
                        </div>
                        <div className="cell small-6">
                            <button
                                onClick={stopCamera}
                                className="button alert expanded"
                            >
                                🛑 Arrêter la caméra
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={takePhoto}
                        className="button primary expanded"
                    >
                        📷 Prendre une photo
                    </button>

                    <button
                        onClick={toggleCamera}
                        className="button secondary expanded"
                    >
                        🔄 Changer caméra
                    </button>

                    <canvas ref={canvasRef} className="hide" />

                    {photo && (
                        <div className="callout success text-center">
                            <h3>📷 Photo capturée :</h3>
                            <img
                                src={photo}
                                alt="Capture"
                                className="border rounded"
                                style={{ width: "100%" }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
