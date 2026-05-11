import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar-home',
    standalone: true,
    imports: [
        CommonModule, 
        AvatarModule, 
        BadgeModule, 
        MenubarModule, 
        InputTextModule, 
        RippleModule,
        RouterLink
    ],
    templateUrl: './navbar-home.html',
    styleUrls: ['./navbar-home.scss']
})
export class NavbarHome implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: '/' // Rotta per la Home
        },
        {
            label: 'Conti e Carte',
            icon: 'pi pi-credit-card',
            items: [
                { label: 'Saldo e Movimenti', icon: 'pi pi-list', routerLink: '/conto/movimenti' },
                { separator: true },
                { label: 'Gestione Limiti', icon: 'pi pi-sliders-h', routerLink: '/conto/limiti' }
            ],
        },
        {
            label: 'Pagamenti',
            icon: 'pi pi-money-bill',
            badge: 'New',
            items: [
                { label: 'Bonifico', icon: 'pi pi-send', routerLink: '/pagamenti/bonifico' },
                { label: 'F24 e Bollettini', icon: 'pi pi-file-pdf', routerLink: '/pagamenti/bollettini' },
                { label: 'Ricarica Telefonica', icon: 'pi pi-mobile', routerLink: '/pagamenti/ricarica' }
            ]
        },
        {
            label: 'Crypto',
            icon: 'pi pi-chart-line',
            routerLink: '/crypto'
        }
    ];
}


}
