export class CheckboxesPage {
   titleCheckboxes = $('h3=Checkboxes');

   get checkboxes() {
      return $$('input[type="checkbox"]');
   }
}

