import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';

@Injectable()
export class NodeService {

    constructor(private httpClient: HttpClient) {}

    getFileSystem() {
        return this.httpClient.get('assets/resources/data/filesystem.json');

    }
}
