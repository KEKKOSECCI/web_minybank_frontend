import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-navbar-home',
    standalone: true,
    imports: [
        CommonModule, 
        AvatarModule, 
        BadgeModule, 
        MenubarModule, 
        InputTextModule, 
        RippleModule
    ],
    templateUrl: './navbar-home.html',
    styleUrls: ['./navbar-home.scss']
})
export class NavbarHome implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
    this.items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-home'
        },
        {
            label: 'Conti e Carte',
            icon: 'pi pi-credit-card',
            items: [
                { label: 'Saldo e Movimenti', icon: 'pi pi-list' },
                { label: 'Le mie Carte', icon: 'pi pi-id-card' },
                { separator: true },
                { label: 'Gestione Limiti', icon: 'pi pi-sliders-h' }
            ]
        },
        {
            label: 'Pagamenti',
            icon: 'pi pi-money-bill',
            badge: 'New',
            items: [
                { label: 'Bonifico', icon: 'pi pi-send' },
                { label: 'F24 e Bollettini', icon: 'pi pi-file-pdf' },
                { label: 'Ricarica Telefonica', icon: 'pi pi-mobile' }
            ]
        },
        {
            label: 'Investimenti',
            icon: 'pi pi-chart-line'
        }
    ];
}

}
