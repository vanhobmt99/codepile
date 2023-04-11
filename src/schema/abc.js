//get ip web rtc of current user
const getIpWebRtc = async (req, res) => {
    try {
        const ipWebRtc = await ipWebRtcModel.find();
        res.json(ipWebRtc);
    } catch (error) {
        res.json({ message: error });
    }
}