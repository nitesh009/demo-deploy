import {
  Component,
  NgZone
} from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-dashboard',
  templateUrl: './health-dashboard.component.html',
  styleUrls: ['./health-dashboard.component.scss']
})
export class HealthDashboardComponent {



  // form

  userform: FormGroup;

    submitted: boolean;

    description: string;

    disableHighLevelCharts: boolean = true;
    constructor(private fb: FormBuilder, private messageService: MessageService,private zone: NgZone, private router: Router) {}


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
   readonly barChartType = "msbar3d";

   readonly gaugeChartType = "angulargauge";
   gaugeChartWidth = 350;
   gaugeChartHeight = 250;


  barChartdata = {
    chart: {
      caption: "Traco Health - Student Health Metrics",
      subcaption: "2019-2020",
      xaxisname: "Health Metric Name",
      yaxisname: "Total Score (In percent)",
      numbersuffix: "%",
      "showValues": "1",
      theme: "fusion",
      "rotateValues": "0"
    },
    categories: [
      {
        category: [
          {
            label: "General Health",

          },
          {
            label: "Educational Health"
          },
          {
            label: "Career Health"
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
            link: "newchart-xml-apple",

          },
          {
            value: "21",
            "link": "newchart-xml-cranberry",

          },
          {
            value: "56",
            "link": "newchart-xml-grapes",

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
          },
          {
            value: "20"
          },

        ],

      },

    ],

    "linkeddata": [
      {
        "id": "apple",
        "linkedchart": {
            "chart": {

                "caption": "General Health - Yearly Report",
                "subcaption": "2019-2020",
                xaxisname: "Health Metric Name",
                yaxisname: "Total Score (In percent)",
                "theme": "fusion",
                "showValues": "1",
                "rotateValues": "0",
                numbersuffix: "%",
                "plottooltext": "$label, $dataValue,  $percentValue"
            },
            categories: [
              {
                category: [
                  {
                    label: "Height",

                  },
                  {
                    label: "Weight",

                  },
                  {
                    label: "BMI"
                  },
                  {
                    label: "Dental Score"
                  },
                  {
                    label: "Eye Sight"
                  },
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
                  {
                    value: "56",

                  },
                  {
                    value: "18",

                  },
                  {
                    value: "19",

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
                  },
                  {
                    value: "20"
                  },
                  {
                    value: "14"
                  },
                  {
                    value: "22"
                  },

                ],

              },

            ],
        }
    },
    {
      "id": "cranberry",
      "linkedchart": {
          "chart": {
              "caption": "Academic Health - Yearly Report",
              "subcaption": "2019-2020",
              xaxisname: "Health Metric Name - applies to below 5th standard students",
              yaxisname: "Total Score (In percent)",
              "theme": "fusion",
              "showValues": "1",
              "rotateValues": "0",
              numbersuffix: "%",
              "plottooltext": "$label, $dataValue,  $percentValue"
          },
          categories: [
            {
              category: [
                {
                  label: "IQ",

                },
                {
                  label: "EQ"
                },
                {
                  label: "BQ"
                },
                {
                  label: "Basic Maths"
                },
                {
                  label: "Basic Science"
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
                {
                  value: "36",

                },
                {
                  value: "21",

                },
                {
                  value: "11",

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
                },
                {
                  value: "20"
                },
                {
                  value: "10"
                },
                {
                  value: "18"
                },

              ],

            },

          ],


      }
  },
  {
    "id": "grapes",
    "linkedchart": {
        "chart": {
            "caption": "Career Health - Yearly Report",
            "subcaption": "2019-2020",
            xaxisname: "Health Metric Name",
            yaxisname: "Total Score (In percent)",
            "theme": "fusion",
            "showValues": "1",
            "rotateValues": "0",
            numbersuffix: "%",
            "plottooltext": "$label, $dataValue,  $percentValue"
        },
        categories: [
          {
            category: [
              {
                label: " IIT JEE & Medical Entrance Exams",

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

        ],
    }
},
]
  };


gaugeData = {
    chart: {
      caption: "Traco Health Student Performance Score",
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
          type: "msbar3d",
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

onTabChange(event) {
  this.messageService.add({severity:'info', summary:'Powered by Traco Health'});
}

}
