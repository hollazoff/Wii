class System extends Object {
    Fps = ''
    Hz = ''
    DolbySound = ''
    RemotePlay = ''
    HdrSupport = ''
    Ram = ''


    constructor(Fps, Hz, DolbySound, RemotePlay, HdrSupport, Ram) {

        super();
        this.Fps = Fps;
        this.Hz = Hz;
        this.DolbySound = DolbySound
        this.RemotePlay = RemotePlay
        this.HdrSupport = HdrSupport
        this.Ram = Ram
    }
}

export let system = new System("30", "60", "Нет", "Нет", "Нет", "128MB");