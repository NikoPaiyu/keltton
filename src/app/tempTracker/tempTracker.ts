


export class TempTracker {

    temperature: number[] = [];

    insert(temperature: number){
      this.temperature.push(temperature);
    }

    get get_max(){
      return  Math.max(...this.temperature);
    }

    get get_min(){
      return Math.min(...this.temperature);
    }

    get get_mean(){
      let sum = 0 ;
      for(let num of this.temperature){
        sum = sum + num;
      }
      return parseFloat(String(sum / this.temperature.length - 1));
    }

    get get_mode(){
      // Frequently

      let obj = {};
      let maximium = 0;
      let maximumKey: string;

      for(let num of this.temperature){
        if(obj[num]){
          obj[num] = obj[num] + 1;
        }else{
          obj[num] = 1;
        }
      }

      for(let key in obj){

        if(obj[key] > maximium){
          maximumKey = key;
          maximium = obj[key];
        }

      }

      return parseInt(maximumKey) || -1;

    }

}
