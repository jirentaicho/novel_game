import EmptyUtil from "../Utility/EmptyUtil";

export default class AudioManager{

    private audio: HTMLAudioElement;

    private static instance: AudioManager;

    private constructor(){
        this.audio = new Audio();
    }

    public static getInstance(): AudioManager{
        if(!AudioManager.instance){
            AudioManager.instance = new AudioManager();
        }
        return AudioManager.instance;
    }


   public playMusic(filename: string): void{

      if(EmptyUtil.isEmpty(filename)){
          return;
       }
       if(filename == "stop"){
           this.stopMusic();
       }

       this.audio.src = `audio/${filename}`;
       this.audio.play();
   }

   public stopMusic(): void{
       this.audio.pause();
       this.audio.currentTime = 0;
   }


}