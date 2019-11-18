
import {
  Component,
  NgZone
} from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed-career-health',
  templateUrl: './detailed-career-health.component.html',
  styleUrls: ['./detailed-career-health.component.scss']
})
export class DetailedCareerHealthComponent {

  pageHeading: string = 'Career Health'

  // form

  userform: FormGroup;

    submitted: boolean;

    description: string;

    disableHighLevelCharts: boolean = true;
    constructor(private fb: FormBuilder, private messageService: MessageService,private zone: NgZone,private router: Router) {}


    ngOnInit() {
      this.userform = this.fb.group({
          'firstname': new FormControl('', Validators.required),
          'lastname': new FormControl('', Validators.required),
          'description': new FormControl('', Validators.required)
       
      });
      this.disableHighLevelCharts = true;
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
}

get diagnostic() { return JSON.stringify(this.userform.value); }


  // pop up
  display: boolean = false;

  showDialog() {
      this.display = true;
  }

   // constants
   dataFormat = "json"; 
   width = 700;
   height = 400;

   // bar chart
   readonly barChartType = "mscolumn3d";

   readonly gaugeChartType = "angulargauge";
   gaugeChartWidth = 300;
   gaugeChartHeight = 200;


  barChartdata = {
    "chart": {
      "caption": "Career Health - Yearly Report",
      "subcaption": "2019-2020",
      xaxisname: "Health Metric Name",
      yaxisname: "Total Score (In percent)",
      "theme": "fusion",
      "rotateValues": "0",
      numbersuffix: "%",
      "plottooltext": "$label, $dataValue,  $percentValue"
  },
 
  categories: [
    {
      category: [
        {
          label: "IIT JEE & Medical Entrance Exams",
         
        },
        {
          label: "Other Competitive Exams"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Actual Score",
      data: [
        {
          value: "11",    
          
        },
        {
          value: "21",
       
        },
      ],
    },
    {
      seriesname: "Standard Score",
      data: [
        {
          value: "15"
        },
        {
          value: "10"
        }
           
      ],
      
    },
    
  ]
  };


gaugeData = {
    chart: {
      caption: "Career Health",
      subcaption: "2019-2020",
      lowerlimit: "0",
      upperlimit: "100",
      showvalue: "1",
      numbersuffix: "%",
      theme: "fusion"
    },
    colorrange: {
      color: [
        {
          minvalue: "0",
          maxvalue: "50",
          code: "#F2726F"
        },
        {
          minvalue: "50",
          maxvalue: "75",
          code: "#FFC533"
        },
        {
          minvalue: "75",
          maxvalue: "100",
          code: "#62B58F"
        }
      ]
    },
    dials: {
      dial: [
        {
          value: "71",
          tooltext: "<b>9%</b> lesser that target"
        }
      ]
    },
    trendpoints: {
      point: [
        {
          startvalue: "80",
          displayvalue: "Target",
          thickness: "2",
          color: "#E15A26",
          usemarker: "1",
          markerbordercolor: "#E15A26",
          markertooltext: "80%"
        }
      ]
    }
  };
  
  

 
  // data setup...
  barChartDataSource = this.barChartdata;
  highLevelGaugeSource = this.gaugeData;

  chartInstance: any = {};

  // Callback to get chart instance
  initialized(e) {
      this.chartInstance = e.chart; // Save it for further use
     // this.disableHighLevelCharts = false;
       

      // Configure Drilldown attributes 
      // See this : https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configureLink
      this.chartInstance.configureLink({
          type: "mscolumn3d",
          overlayButton: {
              message: 'Back',
              fontColor: '880000',
              bgColor: 'FFEEEE',
              borderColor: '660000'
          }
      }, 0)
  }



  selectedLabel = "";
  selectedValue = "";

  update($event) {
    // Run inside angular context
    this.zone.run(() => {
      this.selectedLabel = $event.dataObj.categoryLabel;
      this.selectedValue = $event.dataObj.displayValue;
      this.router.navigate(['app-detail-health']);
    })

  }

redirectToDetailPage(pageName:string): void {
   this.router.navigate([`${pageName}`]);
} 

backToDashboard(): void {
  this.router.navigate(['app-health-dashboard']);
}



}