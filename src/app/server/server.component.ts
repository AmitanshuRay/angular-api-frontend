import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Server } from './server';
import { ServerService } from './server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  providers: [ServerService],
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  servers: Server[] = [];
  inputField = '';

  constructor(private serverService: ServerService, private formBuilder: FormBuilder){}

  ngOnInit(){
    this.getServers();
  }

  getServers(): void{
    this.serverService.getServers()
    .subscribe(servers => (this.servers = servers));
  }

  searchById(searchTerm: string){
    if(searchTerm){
      this.serverService
      .getById(searchTerm)
      .subscribe(server => (this.servers = [server]));
    }
    else{
      this.getServers();
    }
    this.inputField = '';
  }

  searchByName(searchTerm: string){
    if(searchTerm){
      this.serverService
      .searchServers(searchTerm)
      .subscribe(servers => (this.servers = servers));
    } else{
      this.getServers();
    }
    this.inputField = '';
  }

  checkoutForm = this.formBuilder.group({
    id: '',
    name: '',
    language: '',
    platform: ''
  });

  add(): void{
    const id = (this.checkoutForm.value.id + "").trim();
    const name = (this.checkoutForm.value.name + "").trim();
    const language = (this.checkoutForm.value.language + "").trim();
    const platform = (this.checkoutForm.value.platform + "").trim();
    
    if(!name){
      return;
    }

    // The server will generate the id for this new server object
    const newServer: Server = {id, name, language, platform} as Server;
    this.serverService
    .addServer(newServer)
    .subscribe();
    this.servers.push(newServer);
    this.checkoutForm.reset();
  }

  delete(server: Server): void{
    this.servers = this.servers.filter(s => s !== server);
    this.serverService
    .deleteServer(server.id)
    .subscribe();
  }
}