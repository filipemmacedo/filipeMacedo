import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles:any;

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit():void {
    this.showArticles();
  }

  showArticles() {
    this.articles = this.articleService.listArticles().subscribe(article=>{
      this.articles = article;
    });
  };

  deleteArticle(id:any) {
    this.articleService.deleteArticle(id).subscribe(
      res => {
        this.articles = this.articles.filter((a:any) => a.id == id);
      }
    );
    this.router.navigateByUrl('/');
  }

}
