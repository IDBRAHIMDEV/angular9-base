import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
 
  display: boolean = false;
  editable: boolean = false;

  myArticle: Article = {
     title: "",
     body: "",
     active: false
  }

  articles: Article[] = [];
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles() {
    this.articleService.getAll()
        .subscribe((res: Article[]) => this.articles = res)
  }

  persistArticle() {
    this.articleService.save(this.myArticle)
        .subscribe((res: Article) => {
          
          //Pour ajouter l element dans le tableau de donnees
          this.articles = [res, ...this.articles];

          //pour initialiser le formulaire
          this.myArticle = {
            title: "",
            body: "",
            active: false
          }

          this.display = false;
       
        });
  }

  showForm() {
    this.display = !this.display;
  }

  deleteArticle(id) {
    this.articleService.delete(id)
        .subscribe(() => {
          this.articles = this.articles.filter(article => article.id !== id)
        })
  }


  editArticle(article: Article) {
    this.myArticle = article;
    this.display = true;
    this.editable = true;
  }

  updateArticle() {
    this.articleService.update(this.myArticle)
        .subscribe(res => {
       
          this.myArticle = {
            title: "",
            body: "",
            active: false
          }

          this.editable = false;

          this.display = false;
        })
  }

  changeStatus(article: Article) {
    
    this.articleService.activate(article)
    .subscribe(res => {
      
          article.active = !article.active;
    })
  } 

}
