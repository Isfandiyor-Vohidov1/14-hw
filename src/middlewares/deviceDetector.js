import DeviceDetector from "device-detector-js";

const deviceDetector = new DeviceDetector();

export const detector = (req, next) => {
    const userAgent = req.headers['user-agent'] || '';
    const device = deviceDetector.parse(userAgent);
    req.deviceInfo = {
        device_name: device?.device?.name,
        os: device?.os?.name,
        client: device?.device?.type,
        device_brand: device?.device?.brand,
        raw_user_agent: device?.device?.model
    }
    next();
}