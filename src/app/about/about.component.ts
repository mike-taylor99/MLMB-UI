import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  models: {'model':string, 'accuracy':string, 'description':string}[] = [
    {'model':'Logistic Regression', 'accuracy':'70.13%', 'description':'penalty=elasticnet, solver=saga, l1_ratio=0.5'},
    {'model':'Support Vector Classifier', 'accuracy':'68.28%', 'description':'kernel=linear'},
    {'model':'Random Forest Classifier', 'accuracy':'70.13%', 'description':'bootstrap: False, min_samples_leaf: 3, n_estimators: 50, min_samples_split: 10, max_features: sqrt, max_depth: 20'},
    {'model':'Gradient Boosting Classifier', 'accuracy':'71.12%', 'description':'loss: exponential, n_estimators:100, min_samples_leaf: 3, min_samples_split: 10, max_features: sqrt, max_depth: 20'}
  ];

}
