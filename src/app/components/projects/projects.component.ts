import { Component, OnInit } from '@angular/core';
import { Card, CategoryType, TopicType } from 'src/models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public Elements = Array<Card>()
  public copyElements = Array<Card>()


  constructor() { }

  ngOnInit(): void {
    this.Elements = [
      {
        title: "Reactive Programming in Angular", subtitle: "On Github", description: "My tests in reactive programing in Angular. Using observables, promises, async pipe and rxgs. ", link: "https://github.com/lucass-teixeira/100-Angular-Challenges", category: CategoryType.App,
        topics: [TopicType.angular, TopicType.frontend]
      },
      {
        title: "My resumé", subtitle: "On Github", description: "This website was developed in Angular", link: "https://github.com/lucass-teixeira/lucass-teixeira.github.io", category: CategoryType.App,
        topics: [TopicType.angular, TopicType.frontend]
      },
      {
        title: "The Watcher", subtitle: "teste", description: "Watcher is a daily habits diary that makes you more productive.", link: "https://play.google.com/store/apps/details?id=com.teixeiracompany.watcher", category: CategoryType.App,
        topics: [TopicType.xamarin, TopicType.dotnet, TopicType.cSharp, TopicType.sqlite]
      },
      {
        title: "100 Angular Challenges", subtitle: "On Github", description: "An angular course developing 100 challenges including components, pipes, services, reactive programing(rjxs) and more.", link: "https://github.com/lucass-teixeira/100-Angular-Challenges", category: CategoryType.App,
        topics: [TopicType.angular, TopicType.frontend]
      },
      {
        title: "ContosoPizza", subtitle: "On Github", description: "An asp net web api using mediator pattern and CQRS. This is an online pizza ordering backend system developed in Asp .NET web API.", link: "https://github.com/lucass-teixeira/ContosoPizza", category: CategoryType.App,
        topics: [TopicType.dotnet, TopicType.backend, TopicType.cSharp]
      },
      {
        title: "EmpreGO", subtitle: "On Github", description: "A full stack project that helps students to find jobs on partner companies of SENAI de Informática. Me with more 4 developers developed a project with an app in Xamarin Forms and website with ReactJs.  ", link: "", category: CategoryType.App,
        topics: [TopicType.reactJs, TopicType.xamarin, TopicType.sql, TopicType.dotnet, TopicType.cSharp]
      },
    ]
    this.copyElements = [...this.Elements]
  }

  public search(searchText: string){
    if(searchText.length > 0)
    {
      this.Elements = this.Elements.filter(x => x.title.toLowerCase().includes(searchText.toLowerCase()));
    }
    else{
      this.Elements.splice(0, this.Elements.length)
      this.Elements = [...this.copyElements]
    }
  }

  public filter(topics: number[]): void {
    this.Elements.splice(0, this.Elements.length)
    if (topics.length > 0) {

      for (let i = 0; i < this.copyElements.length; i++) {
        const element = this.copyElements[i];

        for (let j = 0; j < topics.length; j++) {
          const topic = topics[j];

          if (element.topics.includes(topics[j])) {
            if(!this.Elements.includes(element))
              this.Elements.push(element)
            continue
          }
        }

      }
    }
    else{
      this.Elements = [...this.copyElements]
    }
  }

}
