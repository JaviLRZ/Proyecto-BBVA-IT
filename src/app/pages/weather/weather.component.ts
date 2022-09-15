import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { RootObject } from 'src/app/shared/interfaces/weather.interfaces';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherComponent {
  @Input() public weather!: RootObject;

  constructor(){}

  public BASE_URL = 'http://openweathermap.org/img/wn';

  ciudad: string = '';
  diaSemana: string = '';
  diaSemana1: string = '';
  diaSemana2: string= '';
  diaSemana3: string= '';
  dias: string[] = ["Mon", "Tue" , "Wed", "Thu", "Fri", "Sat", "Sun"]
  dayAux: any ;
  dayAux1: any;
  dayAux2: any;

  ngOnInit(): void{
    this.getDayFuture();
    this.getDiaSemana();
  }
  
  getDiaSemana(){
    let fecha = new Date();
    let fechaStr: string= '';

    fechaStr = fecha.toString() ;
    this.diaSemana = fechaStr.substr(0,3);

    for (let i = 0; i < this.dias.length; i++) {
      if(this.diaSemana == this.dias[i]){
        this.diaSemana1 = this.dias[i + 1].toString();
        this.diaSemana2 = this.dias[i + 2].toString();
        this.diaSemana3 = this.dias[i + 3].toString();
      }
    }
  }

  getDayFuture(){
    this.ciudad = this.weather.city.name;
    this.weather.list.forEach(data => {
      if(this.dayAux != null){
        const [dateComponents] = data.dt_txt.split(' ');
        const [dateComponentsAux1] = this.dayAux.dt_txt.split(' ');

          if(this.dayAux1 == null && dateComponents != dateComponentsAux1){
            this.dayAux1 = data;
            console.log('VALOR 2: ' ,this.dayAux1);
          }
          else if(this.dayAux1 != null && this.dayAux2 == null){
            const [dateComponentsAux2] = this.dayAux1.dt_txt.split(' ');
            if(dateComponents != dateComponentsAux2){
              this.dayAux2 = data;
              console.log('VALOR 3: ' ,this.dayAux2);
            }
          }
      }
      else{
        this.dayAux = data;
        console.log('VALOR 1: ' , this.dayAux);
      }
    })

  }

}
