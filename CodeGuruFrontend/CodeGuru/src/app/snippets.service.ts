import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Snippets } from './snippets';
import { Secret } from './Secret';

@Injectable({
  providedIn: 'root'
})
export class SnippetsService {

  snippets: Snippets[] = [];

  secret: Secret = new Secret();
  baseUrl : string = this.secret.snippetsUrl
  
  constructor(private http:HttpClient) { }

  GetSnippets():Observable<Snippets[]>{
    return this.http.get<Snippets[]>(this.baseUrl);
  }
  AddSnippets(newSnippet: Snippets):Observable<Snippets>{
    return this.http.post<Snippets>(this.baseUrl, newSnippet);
  }
  DeleteSnippets(snippetId: number):Observable<void>{
    return this.http.delete<void>(this.baseUrl+"/"+snippetId);
  }
  SaveChatGPTCode(chatGptCode: string): Observable<any> {
    // Assuming you have an endpoint for saving ChatGPT code in your API
    return this.http.post<any>(`${this.baseUrl}/`, { code: chatGptCode });
  }
  // EditSnippets(id: number, editSnippets: Snippets):Observable<void>{
  //   return this.http.put<void>(this.baseUrl+"/"+id, editSnippets);
  // }
}
