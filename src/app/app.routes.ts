import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Project } from './project/project';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'about',
        component: About,
    },
    {
        path: 'project',
        component: Project,
    },
    
];
