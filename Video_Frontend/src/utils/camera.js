export const getAvailableCameras = async () => {
    try {
        const devices = (await navigator.mediaDevices.enumerateDevices()).filter((device) => device.kind === 'videoinput');
        return { status: true, videoDevices: devices };
    } catch (error) {
        console.log(error)
        return { status: false, errMsg: error };
    }
}

export const startCamera = async (deviceId) => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                deviceId: deviceId ? { exact: deviceId } : undefined,
            },
        });
        return { status: true, data: stream }
    } catch (error) {
        console.log(error);
        return { status: false, errMsg: error };
    }
}

export const serializeCameraInfo = (cameras) => {
    // Serialize the cameraInfo object
    const cameraInfo = {
        deviceId: cameras.deviceId,
        kind: cameras.kind,
        label: cameras.label,
        groupId: cameras.groupId
    };
    return cameraInfo;
};


