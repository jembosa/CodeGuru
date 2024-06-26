import { Component, OnInit } from '@angular/core';
import { SnippetsService } from '../snippets.service';
import { Snippets } from '../snippets';

@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippet.component.html',
  styleUrls: ['./add-snippet.component.css'],
})
export class AddSnippetComponent implements OnInit {
  snippets: Snippets[] = [];
  newSnippet: Snippets = new Snippet();

  constructor(private snippetService: SnippetsService) {}

  ngOnInit(): void {
    this.fetchSnippets();
  }

  fetchSnippets(): void {
    this.snippetService.GetSnippets().subscribe(
      (snippetsResult) => {
        this.snippets = snippetsResult;
        console.log(this.snippets);
      }
    );
  }

  addSnippet(): void {
    this.snippetService.AddSnippets(this.newSnippet)
      .subscribe(
        (result) => {
          console.log('Snippet added successfully:', result);
          this.snippets.push(result);
        },
        (error) => {
          console.error('Error adding snippet:', error);
        }
      );
  }
}