import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  onSearch(query: any) {
    console.log(query, query.target.value);
    this.userService.getUser(query.target.value)

    this.search.emit(query.target.value);
  }

}
