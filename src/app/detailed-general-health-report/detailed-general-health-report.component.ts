import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../services/nodeservice.service';


@Component({
  selector: 'app-detailed-general-health-report',
  templateUrl: './detailed-general-health-report.component.html',
  styleUrls: ['./detailed-general-health-report.component.scss']
})
export class DetailedGeneralHealthReportComponent implements OnInit {


  files: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {

      this.nodeService.getFileSystem().subscribe((data: TreeNode[]) => {
        console.log(data);
        this.files = data['data'];
        console.log(this.files);
      });


  }

}
