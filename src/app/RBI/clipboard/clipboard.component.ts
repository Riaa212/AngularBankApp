import { Component } from '@angular/core';

@Component({
  selector: 'app-clipboard',
  standalone: false,
  templateUrl: './clipboard.component.html',
  styleUrl: './clipboard.component.css'
})
export class ClipboardComponent {

   textToCopy: string = '';

  copyText() {
    navigator.clipboard.writeText(this.textToCopy).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {
      alert('Failed to copy text: ' + err);
    });
  }
}
