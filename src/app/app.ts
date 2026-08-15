import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { simplePatreon, simpleKofi, simpleDiscord, simpleSteam } from '@ng-icons/simple-icons';
import { monoDownload } from '@ng-icons/mono-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, NgIcon],
  templateUrl: './app.html',
  styleUrl: './app.css',
  viewProviders: [
    provideIcons({ simplePatreon, simpleKofi, simpleDiscord, monoDownload, simpleSteam }),
  ],
})
export class App {
  protected readonly title = signal('susia-website');

  protected readonly steamUrl =
    'https://store.steampowered.com/app/4467690/Susia__Wolf_Life_Simulator/';
  protected readonly patreonUrl = 'https://www.patreon.com/Koiran';
  protected readonly kofiUrl = 'hhttps://ko-fi.com/koirandev';
  protected readonly discordUrl = 'https://discord.gg/YfJZZyPzYh';
  protected readonly demoDownloadUrl =
    'https://github.com/koirandev/Susia-Demo-Beta/releases/latest';
}

