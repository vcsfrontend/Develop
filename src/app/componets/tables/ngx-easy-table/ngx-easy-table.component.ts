import { Component, ViewChild,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';

import { SharedModule } from '../../../shared/common/sharedmodule';

import { ColumnMode, DatatableComponent, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';

import { Company, data } from '../../../shared/data/table_data/easy_table';
import {
  API,
  APIDefinition,
  Columns,
  Config,
  DefaultConfig,
  TableModule,
} from 'ngx-easy-table';

@Component({
  selector: 'app-grid-js-tabls',
  standalone: true,
  imports: [SharedModule, TableModule,NgxDatatableModule],
  templateUrl: './ngx-easy-table.component.html',
  styleUrl: './ngx-easy-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class GridJsTablsComponent {
  @ViewChild(DatatableComponent)
  table!: DatatableComponent;
  [x: string]: any;
  //**Filtering TsCode */

  row: any[] = [
    {
      name: 'Ethel Price',
      gender: 'female',
      company: 'Johnson',
      age: 22,
    },
    {
      name: 'Claudine Neal',
      gender: 'female',
      company: 'Sealoud',
      age: 55,
    },
    {
      name: 'Beryl Rice',
      gender: 'female',
      company: 'Velity',
      age: 67,
    },
    {
      name: 'Wilder Gonzales',
      gender: 'male',
      company: 'Geekko',
    },
    {
      name: 'Georgina Schultz',
      gender: 'female',
      company: 'Suretech',
    },
    {
      name: 'Carroll Buchanan',
      gender: 'male',
      company: 'Ecosys',
    },
    {
      name: 'Valarie Atkinson',
      gender: 'female',
      company: 'Hopeli',
    },
    {
      name: 'Schroeder Mathews',
      gender: 'male',
      company: 'Polarium',
    },
    {
      name: 'Lynda Mendoza',
      gender: 'female',
      company: 'Dogspa',
    },
    {
      name: 'Sarah Massey',
      gender: 'female',
      company: 'Bisba',
    },
    {
      name: 'Robles Boyle',
      gender: 'male',
      company: 'Comtract',
    },
    {
      name: 'Evans Hickman',
      gender: 'male',
      company: 'Parleynet',
    },
    {
      name: 'Dawson Barber',
      gender: 'male',
      company: 'Dymi',
    },
    {
      name: 'Bruce Strong',
      gender: 'male',
      company: 'Xyqag',
    },
    {
      name: 'Nellie Whitfield',
      gender: 'female',
      company: 'Exospace',
    },
    {
      name: 'Jackson Macias',
      gender: 'male',
      company: 'Aquamate',
    },
    {
      name: 'Pena Pena',
      gender: 'male',
      company: 'Quarx',
    },
    {
      name: 'Lelia Gates',
      gender: 'female',
      company: 'Proxsoft',
    },
    {
      name: 'Letitia Vasquez',
      gender: 'female',
      company: 'Slumberia',
    },
    {
      name: 'Trevino Moreno',
      gender: 'male',
      company: 'Conjurica',
    },
    {
      name: 'Barr Page',
      gender: 'male',
      company: 'Apex',
    },
    {
      name: 'Kirkland Merrill',
      gender: 'male',
      company: 'Utara',
    },
    {
      name: 'Blanche Conley',
      gender: 'female',
      company: 'Imkan',
    },
    {
      name: 'Atkins Dunlap',
      gender: 'male',
      company: 'Comveyor',
    },
    {
      name: 'Everett Foreman',
      gender: 'male',
      company: 'Maineland',
    },
    {
      name: 'Gould Randolph',
      gender: 'male',
      company: 'Intergeek',
    },
    {
      name: 'Kelli Leon',
      gender: 'female',
      company: 'Verbus',
    },
    {
      name: 'Freda Mason',
      gender: 'female',
      company: 'Accidency',
    },
    {
      name: 'Tucker Maxwell',
      gender: 'male',
      company: 'Lumbrex',
    },
    {
      name: 'Yvonne Parsons',
      gender: 'female',
      company: 'Zolar',
    },
    {
      name: 'Woods Key',
      gender: 'male',
      company: 'Bedder',
    },
    {
      name: 'Stephens Reilly',
      gender: 'male',
      company: 'Acusage',
    },
    {
      name: 'Mcfarland Sparks',
      gender: 'male',
      company: 'Comvey',
    },
    {
      name: 'Jocelyn Sawyer',
      gender: 'female',
      company: 'Fortean',
    },
    {
      name: 'Renee Barr',
      gender: 'female',
      company: 'Kiggle',
    },
    {
      name: 'Gaines Beck',
      gender: 'male',
      company: 'Sequitur',
    },
    {
      name: 'Luisa Farrell',
      gender: 'female',
      company: 'Cinesanct',
    },
    {
      name: 'Robyn Strickland',
      gender: 'female',
      company: 'Obones',
    },
    {
      name: 'Roseann Jarvis',
      gender: 'female',
      company: 'Aquazure',
    },
    {
      name: 'Johnston Park',
      gender: 'male',
      company: 'Netur',
    },
    {
      name: 'Wong Craft',
      gender: 'male',
      company: 'Opticall',
    },
    {
      name: 'Merritt Cole',
      gender: 'male',
      company: 'Techtrix',
    },
    {
      name: 'Dale Byrd',
      gender: 'female',
      company: 'Kneedles',
    },
    {
      name: 'Sara Delgado',
      gender: 'female',
      company: 'Netagy',
    },
    {
      name: 'Alisha Myers',
      gender: 'female',
      company: 'Intradisk',
    },
    {
      name: 'Felecia Smith',
      gender: 'female',
      company: 'Futurity',
    },
    {
      name: 'Neal Harvey',
      gender: 'male',
      company: 'Pyramax',
    },
    {
      name: 'Nola Miles',
      gender: 'female',
      company: 'Sonique',
    },
    {
      name: 'Herring Pierce',
      gender: 'male',
      company: 'Geeketron',
    },
    {
      name: 'Shelley Rodriquez',
      gender: 'female',
      company: 'Bostonic',
    },
    {
      name: 'Cora Chase',
      gender: 'female',
      company: 'Isonus',
    },
    {
      name: 'Mckay Santos',
      gender: 'male',
      company: 'Amtas',
    },
    {
      name: 'Hilda Crane',
      gender: 'female',
      company: 'Jumpstack',
    },
    {
      name: 'Jeanne Lindsay',
      gender: 'female',
      company: 'Genesynk',
    },
    {
      name: 'Frye Sharpe',
      gender: 'male',
      company: 'Eplode',
    },
    {
      name: 'Velma Fry',
      gender: 'female',
      company: 'Ronelon',
    },
    {
      name: 'Reyna Espinoza',
      gender: 'female',
      company: 'Prismatic',
    },
    {
      name: 'Spencer Sloan',
      gender: 'male',
      company: 'Comverges',
    },
    {
      name: 'Graham Marsh',
      gender: 'male',
      company: 'Medifax',
    },
    {
      name: 'Hale Boone',
      gender: 'male',
      company: 'Digial',
    },
    {
      name: 'Wiley Hubbard',
      gender: 'male',
      company: 'Zensus',
    },
    {
      name: 'Blackburn Drake',
      gender: 'male',
      company: 'Frenex',
    },
    {
      name: 'Franco Hunter',
      gender: 'male',
      company: 'Rockabye',
    },
    {
      name: 'Barnett Case',
      gender: 'male',
      company: 'Norali',
    },
    {
      name: 'Alexander Foley',
      gender: 'male',
      company: 'Geekosis',
    },
    {
      name: 'Lynette Stein',
      gender: 'female',
      company: 'Macronaut',
    },
    {
      name: 'Anthony Joyner',
      gender: 'male',
      company: 'Senmei',
    },
    {
      name: 'Garrett Brennan',
      gender: 'male',
      company: 'Bluegrain',
    },
    {
      name: 'Betsy Horton',
      gender: 'female',
      company: 'Zilla',
    },
    {
      name: 'Patton Small',
      gender: 'male',
      company: 'Genmex',
    },
    {
      name: 'Lakisha Huber',
      gender: 'female',
      company: 'Insource',
    },
    {
      name: 'Lindsay Avery',
      gender: 'female',
      company: 'Unq',
    },
    {
      name: 'Ayers Hood',
      gender: 'male',
      company: 'Accuprint',
    },
    {
      name: 'Torres Durham',
      gender: 'male',
      company: 'Uplinx',
    },
    {
      name: 'Vincent Hernandez',
      gender: 'male',
      company: 'Talendula',
    },
    {
      name: 'Baird Ryan',
      gender: 'male',
      company: 'Aquasseur',
    },
    {
      name: 'Georgia Mercer',
      gender: 'female',
      company: 'Skyplex',
    },
    {
      name: 'Francesca Elliott',
      gender: 'female',
      company: 'Nspire',
    },
    {
      name: 'Lyons Peters',
      gender: 'male',
      company: 'Quinex',
    },
    {
      name: 'Kristi Brewer',
      gender: 'female',
      company: 'Oronoko',
    },
    {
      name: 'Tonya Bray',
      gender: 'female',
      company: 'Insuron',
    },
    {
      name: 'Valenzuela Huff',
      gender: 'male',
      company: 'Applideck',
    },
    {
      name: 'Tiffany Anderson',
      gender: 'female',
      company: 'Zanymax',
    },
    {
      name: 'Jerri King',
      gender: 'female',
      company: 'Eventex',
    },
    {
      name: 'Rocha Meadows',
      gender: 'male',
      company: 'Goko',
    },
    {
      name: 'Marcy Green',
      gender: 'female',
      company: 'Pharmex',
    },
    {
      name: 'Kirk Cross',
      gender: 'male',
      company: 'Portico',
    },
    {
      name: 'Hattie Mullen',
      gender: 'female',
      company: 'Zilencio',
    },
    {
      name: 'Deann Bridges',
      gender: 'female',
      company: 'Equitox',
    },
    {
      name: 'Chaney Roach',
      gender: 'male',
      company: 'Qualitern',
    },
    {
      name: 'Consuelo Dickson',
      gender: 'female',
      company: 'Poshome',
    },
    {
      name: 'Billie Rowe',
      gender: 'female',
      company: 'Cemention',
    },
    {
      name: 'Bean Donovan',
      gender: 'male',
      company: 'Mantro',
    },
    {
      name: 'Lancaster Patel',
      gender: 'male',
      company: 'Krog',
    },
    {
      name: 'Rosa Dyer',
      gender: 'female',
      company: 'Netility',
    },
    {
      name: 'Christine Compton',
      gender: 'female',
      company: 'Bleeko',
    },
    {
      name: 'Milagros Finch',
      gender: 'female',
      company: 'Handshake',
    },
    {
      name: 'Ericka Alvarado',
      gender: 'female',
      company: 'Lyrichord',
    },
    {
      name: 'Sylvia Sosa',
      gender: 'female',
      company: 'Circum',
    },
    {
      name: 'Humphrey Curtis',
      gender: 'male',
      company: 'Corepan',
    },
  ];
  rows: any[] = [
    {
      name: 'Ethel Price',
      gender: 'female',
      company: 'Johnson, Johnson and Partners, LLC CMP DDC',
      age: 22,
    },
    {
      name: 'Claudine Neal',
      gender: 'female',
      company: 'Sealoud',
      age: 55,
    },
    {
      name: 'Beryl Rice',
      gender: 'female',
      company: 'Velity',
      age: 67,
    },
    {
      name: 'Wilder Gonzales',
      gender: 'male',
      company: 'Geekko',
    },
    {
      name: 'Georgina Schultz',
      gender: 'female',
      company: 'Suretech',
    },
    {
      name: 'Carroll Buchanan',
      gender: 'male',
      company: 'Ecosys',
    },
    {
      name: 'Valarie Atkinson',
      gender: 'female',
      company: 'Hopeli',
    },
    {
      name: 'Schroeder Mathews',
      gender: 'male',
      company: 'Polarium',
    },
    {
      name: 'Lynda Mendoza',
      gender: 'female',
      company: 'Dogspa',
    },
    {
      name: 'Sarah Massey',
      gender: 'female',
      company: 'Bisba',
    },
    {
      name: 'Robles Boyle',
      gender: 'male',
      company: 'Comtract',
    },
    {
      name: 'Evans Hickman',
      gender: 'male',
      company: 'Parleynet',
    },
    {
      name: 'Dawson Barber',
      gender: 'male',
      company: 'Dymi',
    },
    {
      name: 'Bruce Strong',
      gender: 'male',
      company: 'Xyqag',
    },
    {
      name: 'Nellie Whitfield',
      gender: 'female',
      company: 'Exospace',
    },
    {
      name: 'Jackson Macias',
      gender: 'male',
      company: 'Aquamate',
    },
    {
      name: 'Pena Pena',
      gender: 'male',
      company: 'Quarx',
    },
    {
      name: 'Lelia Gates',
      gender: 'female',
      company: 'Proxsoft',
    },
    {
      name: 'Letitia Vasquez',
      gender: 'female',
      company: 'Slumberia',
    },
    {
      name: 'Trevino Moreno',
      gender: 'male',
      company: 'Conjurica',
    },
    {
      name: 'Barr Page',
      gender: 'male',
      company: 'Apex',
    },
    {
      name: 'Kirkland Merrill',
      gender: 'male',
      company: 'Utara',
    },
    {
      name: 'Blanche Conley',
      gender: 'female',
      company: 'Imkan',
    },
    {
      name: 'Atkins Dunlap',
      gender: 'male',
      company: 'Comveyor',
    },
    {
      name: 'Everett Foreman',
      gender: 'male',
      company: 'Maineland',
    },
    {
      name: 'Gould Randolph',
      gender: 'male',
      company: 'Intergeek',
    },
    {
      name: 'Kelli Leon',
      gender: 'female',
      company: 'Verbus',
    },
    {
      name: 'Freda Mason',
      gender: 'female',
      company: 'Accidency',
    },
    {
      name: 'Tucker Maxwell',
      gender: 'male',
      company: 'Lumbrex',
    },
    {
      name: 'Yvonne Parsons',
      gender: 'female',
      company: 'Zolar',
    },
    {
      name: 'Woods Key',
      gender: 'male',
      company: 'Bedder',
    },
    {
      name: 'Stephens Reilly',
      gender: 'male',
      company: 'Acusage',
    },
    {
      name: 'Mcfarland Sparks',
      gender: 'male',
      company: 'Comvey',
    },
    {
      name: 'Jocelyn Sawyer',
      gender: 'female',
      company: 'Fortean',
    },
    {
      name: 'Renee Barr',
      gender: 'female',
      company: 'Kiggle',
    },
    {
      name: 'Gaines Beck',
      gender: 'male',
      company: 'Sequitur',
    },
    {
      name: 'Luisa Farrell',
      gender: 'female',
      company: 'Cinesanct',
    },
    {
      name: 'Robyn Strickland',
      gender: 'female',
      company: 'Obones',
    },
    {
      name: 'Roseann Jarvis',
      gender: 'female',
      company: 'Aquazure',
    },
    {
      name: 'Johnston Park',
      gender: 'male',
      company: 'Netur',
    },
    {
      name: 'Wong Craft',
      gender: 'male',
      company: 'Opticall',
    },
    {
      name: 'Merritt Cole',
      gender: 'male',
      company: 'Techtrix',
    },
    {
      name: 'Dale Byrd',
      gender: 'female',
      company: 'Kneedles',
    },
    {
      name: 'Sara Delgado',
      gender: 'female',
      company: 'Netagy',
    },
    {
      name: 'Alisha Myers',
      gender: 'female',
      company: 'Intradisk',
    },
    {
      name: 'Felecia Smith',
      gender: 'female',
      company: 'Futurity',
    },
    {
      name: 'Neal Harvey',
      gender: 'male',
      company: 'Pyramax',
    },
    {
      name: 'Nola Miles',
      gender: 'female',
      company: 'Sonique',
    },
    {
      name: 'Herring Pierce',
      gender: 'male',
      company: 'Geeketron',
    },
    {
      name: 'Shelley Rodriquez',
      gender: 'female',
      company: 'Bostonic',
    },
    {
      name: 'Cora Chase',
      gender: 'female',
      company: 'Isonus',
    },
    {
      name: 'Mckay Santos',
      gender: 'male',
      company: 'Amtas',
    },
    {
      name: 'Hilda Crane',
      gender: 'female',
      company: 'Jumpstack',
    },
    {
      name: 'Jeanne Lindsay',
      gender: 'female',
      company: 'Genesynk',
    },
    {
      name: 'Frye Sharpe',
      gender: 'male',
      company: 'Eplode',
    },
    {
      name: 'Velma Fry',
      gender: 'female',
      company: 'Ronelon',
    },
    {
      name: 'Reyna Espinoza',
      gender: 'female',
      company: 'Prismatic',
    },
    {
      name: 'Spencer Sloan',
      gender: 'male',
      company: 'Comverges',
    },
    {
      name: 'Graham Marsh',
      gender: 'male',
      company: 'Medifax',
    },
    {
      name: 'Hale Boone',
      gender: 'male',
      company: 'Digial',
    },
    {
      name: 'Wiley Hubbard',
      gender: 'male',
      company: 'Zensus',
    },
    {
      name: 'Blackburn Drake',
      gender: 'male',
      company: 'Frenex',
    },
    {
      name: 'Franco Hunter',
      gender: 'male',
      company: 'Rockabye',
    },
    {
      name: 'Barnett Case',
      gender: 'male',
      company: 'Norali',
    },
    {
      name: 'Alexander Foley',
      gender: 'male',
      company: 'Geekosis',
    },
    {
      name: 'Lynette Stein',
      gender: 'female',
      company: 'Macronaut',
    },
    {
      name: 'Anthony Joyner',
      gender: 'male',
      company: 'Senmei',
    },
    {
      name: 'Garrett Brennan',
      gender: 'male',
      company: 'Bluegrain',
    },
    {
      name: 'Betsy Horton',
      gender: 'female',
      company: 'Zilla',
    },
    {
      name: 'Patton Small',
      gender: 'male',
      company: 'Genmex',
    },
    {
      name: 'Lakisha Huber',
      gender: 'female',
      company: 'Insource',
    },
    {
      name: 'Lindsay Avery',
      gender: 'female',
      company: 'Unq',
    },
    {
      name: 'Ayers Hood',
      gender: 'male',
      company: 'Accuprint',
    },
    {
      name: 'Torres Durham',
      gender: 'male',
      company: 'Uplinx',
    },
    {
      name: 'Vincent Hernandez',
      gender: 'male',
      company: 'Talendula',
    },
    {
      name: 'Baird Ryan',
      gender: 'male',
      company: 'Aquasseur',
    },
    {
      name: 'Georgia Mercer',
      gender: 'female',
      company: 'Skyplex',
    },
    {
      name: 'Francesca Elliott',
      gender: 'female',
      company: 'Nspire',
    },
    {
      name: 'Lyons Peters',
      gender: 'male',
      company: 'Quinex',
    },
    {
      name: 'Kristi Brewer',
      gender: 'female',
      company: 'Oronoko',
    },
    {
      name: 'Tonya Bray',
      gender: 'female',
      company: 'Insuron',
    },
    {
      name: 'Valenzuela Huff',
      gender: 'male',
      company: 'Applideck',
    },
    {
      name: 'Tiffany Anderson',
      gender: 'female',
      company: 'Zanymax',
    },
    {
      name: 'Jerri King',
      gender: 'female',
      company: 'Eventex',
    },
    {
      name: 'Rocha Meadows',
      gender: 'male',
      company: 'Goko',
    },
    {
      name: 'Marcy Green',
      gender: 'female',
      company: 'Pharmex',
    },
    {
      name: 'Kirk Cross',
      gender: 'male',
      company: 'Portico',
    },
    {
      name: 'Hattie Mullen',
      gender: 'female',
      company: 'Zilencio',
    },
    {
      name: 'Deann Bridges',
      gender: 'female',
      company: 'Equitox',
    },
    {
      name: 'Chaney Roach',
      gender: 'male',
      company: 'Qualitern',
    },
    {
      name: 'Consuelo Dickson',
      gender: 'female',
      company: 'Poshome',
    },
    {
      name: 'Billie Rowe',
      gender: 'female',
      company: 'Cemention',
    },
    {
      name: 'Bean Donovan',
      gender: 'male',
      company: 'Mantro',
    },
    {
      name: 'Lancaster Patel',
      gender: 'male',
      company: 'Krog',
    },
    {
      name: 'Rosa Dyer',
      gender: 'female',
      company: 'Netility',
    },
    {
      name: 'Christine Compton',
      gender: 'female',
      company: 'Bleeko',
    },
    {
      name: 'Milagros Finch',
      gender: 'female',
      company: 'Handshake',
    },
    {
      name: 'Ericka Alvarado',
      gender: 'female',
      company: 'Lyrichord',
    },
    {
      name: 'Sylvia Sosa',
      gender: 'female',
      company: 'Circum',
    },
    {
      name: 'Humphrey Curtis',
      gender: 'male',
      company: 'Corepan',
    },
  ];
  @ViewChild('mydatatable') mydatatable: any;

  count = 50;

  //**live TsCode */
  rows1: any[] = [
    {
      name: 'Ethel Price',
      gender: 'female',
      company: 'Johnson, Johnson and Partners, LLC CMP DDC',
      age: 22,
    },
    {
      name: 'Claudine Neal',
      gender: 'female',
      company: 'Sealoud',
      age: 55,
    },
    {
      name: 'Beryl Rice',
      gender: 'female',
      company: 'Velity',
      age: 67,
    },
    {
      name: 'Wilder Gonzales',
      gender: 'male',
      company: 'Geekko',
    },
    {
      name: 'Georgina Schultz',
      gender: 'female',
      company: 'Suretech',
    },
    {
      name: 'Carroll Buchanan',
      gender: 'male',
      company: 'Ecosys',
    },
    {
      name: 'Valarie Atkinson',
      gender: 'female',
      company: 'Hopeli',
    },
    {
      name: 'Schroeder Mathews',
      gender: 'male',
      company: 'Polarium',
    },
    {
      name: 'Lynda Mendoza',
      gender: 'female',
      company: 'Dogspa',
    },
    {
      name: 'Sarah Massey',
      gender: 'female',
      company: 'Bisba',
    },
    {
      name: 'Robles Boyle',
      gender: 'male',
      company: 'Comtract',
    },
    {
      name: 'Evans Hickman',
      gender: 'male',
      company: 'Parleynet',
    },
    {
      name: 'Dawson Barber',
      gender: 'male',
      company: 'Dymi',
    },
    {
      name: 'Bruce Strong',
      gender: 'male',
      company: 'Xyqag',
    },
    {
      name: 'Nellie Whitfield',
      gender: 'female',
      company: 'Exospace',
    },
    {
      name: 'Jackson Macias',
      gender: 'male',
      company: 'Aquamate',
    },
    {
      name: 'Pena Pena',
      gender: 'male',
      company: 'Quarx',
    },
    {
      name: 'Lelia Gates',
      gender: 'female',
      company: 'Proxsoft',
    },
    {
      name: 'Letitia Vasquez',
      gender: 'female',
      company: 'Slumberia',
    },
    {
      name: 'Trevino Moreno',
      gender: 'male',
      company: 'Conjurica',
    },
    {
      name: 'Barr Page',
      gender: 'male',
      company: 'Apex',
    },
    {
      name: 'Kirkland Merrill',
      gender: 'male',
      company: 'Utara',
    },
    {
      name: 'Blanche Conley',
      gender: 'female',
      company: 'Imkan',
    },
    {
      name: 'Atkins Dunlap',
      gender: 'male',
      company: 'Comveyor',
    },
    {
      name: 'Everett Foreman',
      gender: 'male',
      company: 'Maineland',
    },
    {
      name: 'Gould Randolph',
      gender: 'male',
      company: 'Intergeek',
    },
    {
      name: 'Kelli Leon',
      gender: 'female',
      company: 'Verbus',
    },
    {
      name: 'Freda Mason',
      gender: 'female',
      company: 'Accidency',
    },
    {
      name: 'Tucker Maxwell',
      gender: 'male',
      company: 'Lumbrex',
    },
    {
      name: 'Yvonne Parsons',
      gender: 'female',
      company: 'Zolar',
    },
    {
      name: 'Woods Key',
      gender: 'male',
      company: 'Bedder',
    },
    {
      name: 'Stephens Reilly',
      gender: 'male',
      company: 'Acusage',
    },
    {
      name: 'Mcfarland Sparks',
      gender: 'male',
      company: 'Comvey',
    },
    {
      name: 'Jocelyn Sawyer',
      gender: 'female',
      company: 'Fortean',
    },
    {
      name: 'Renee Barr',
      gender: 'female',
      company: 'Kiggle',
    },
    {
      name: 'Gaines Beck',
      gender: 'male',
      company: 'Sequitur',
    },
    {
      name: 'Luisa Farrell',
      gender: 'female',
      company: 'Cinesanct',
    },
    {
      name: 'Robyn Strickland',
      gender: 'female',
      company: 'Obones',
    },
    {
      name: 'Roseann Jarvis',
      gender: 'female',
      company: 'Aquazure',
    },
    {
      name: 'Johnston Park',
      gender: 'male',
      company: 'Netur',
    },
    {
      name: 'Wong Craft',
      gender: 'male',
      company: 'Opticall',
    },
    {
      name: 'Merritt Cole',
      gender: 'male',
      company: 'Techtrix',
    },
    {
      name: 'Dale Byrd',
      gender: 'female',
      company: 'Kneedles',
    },
    {
      name: 'Sara Delgado',
      gender: 'female',
      company: 'Netagy',
    },
    {
      name: 'Alisha Myers',
      gender: 'female',
      company: 'Intradisk',
    },
    {
      name: 'Felecia Smith',
      gender: 'female',
      company: 'Futurity',
    },
    {
      name: 'Neal Harvey',
      gender: 'male',
      company: 'Pyramax',
    },
    {
      name: 'Nola Miles',
      gender: 'female',
      company: 'Sonique',
    },
    {
      name: 'Herring Pierce',
      gender: 'male',
      company: 'Geeketron',
    },
    {
      name: 'Shelley Rodriquez',
      gender: 'female',
      company: 'Bostonic',
    },
    {
      name: 'Cora Chase',
      gender: 'female',
      company: 'Isonus',
    },
    {
      name: 'Mckay Santos',
      gender: 'male',
      company: 'Amtas',
    },
    {
      name: 'Hilda Crane',
      gender: 'female',
      company: 'Jumpstack',
    },
    {
      name: 'Jeanne Lindsay',
      gender: 'female',
      company: 'Genesynk',
    },
    {
      name: 'Frye Sharpe',
      gender: 'male',
      company: 'Eplode',
    },
    {
      name: 'Velma Fry',
      gender: 'female',
      company: 'Ronelon',
    },
    {
      name: 'Reyna Espinoza',
      gender: 'female',
      company: 'Prismatic',
    },
    {
      name: 'Spencer Sloan',
      gender: 'male',
      company: 'Comverges',
    },
    {
      name: 'Graham Marsh',
      gender: 'male',
      company: 'Medifax',
    },
    {
      name: 'Hale Boone',
      gender: 'male',
      company: 'Digial',
    },
    {
      name: 'Wiley Hubbard',
      gender: 'male',
      company: 'Zensus',
    },
    {
      name: 'Blackburn Drake',
      gender: 'male',
      company: 'Frenex',
    },
    {
      name: 'Franco Hunter',
      gender: 'male',
      company: 'Rockabye',
    },
    {
      name: 'Barnett Case',
      gender: 'male',
      company: 'Norali',
    },
    {
      name: 'Alexander Foley',
      gender: 'male',
      company: 'Geekosis',
    },
    {
      name: 'Lynette Stein',
      gender: 'female',
      company: 'Macronaut',
    },
    {
      name: 'Anthony Joyner',
      gender: 'male',
      company: 'Senmei',
    },
    {
      name: 'Garrett Brennan',
      gender: 'male',
      company: 'Bluegrain',
    },
    {
      name: 'Betsy Horton',
      gender: 'female',
      company: 'Zilla',
    },
    {
      name: 'Patton Small',
      gender: 'male',
      company: 'Genmex',
    },
    {
      name: 'Lakisha Huber',
      gender: 'female',
      company: 'Insource',
    },
    {
      name: 'Lindsay Avery',
      gender: 'female',
      company: 'Unq',
    },
    {
      name: 'Ayers Hood',
      gender: 'male',
      company: 'Accuprint',
    },
    {
      name: 'Torres Durham',
      gender: 'male',
      company: 'Uplinx',
    },
    {
      name: 'Vincent Hernandez',
      gender: 'male',
      company: 'Talendula',
    },
    {
      name: 'Baird Ryan',
      gender: 'male',
      company: 'Aquasseur',
    },
    {
      name: 'Georgia Mercer',
      gender: 'female',
      company: 'Skyplex',
    },
    {
      name: 'Francesca Elliott',
      gender: 'female',
      company: 'Nspire',
    },
    {
      name: 'Lyons Peters',
      gender: 'male',
      company: 'Quinex',
    },
    {
      name: 'Kristi Brewer',
      gender: 'female',
      company: 'Oronoko',
    },
    {
      name: 'Tonya Bray',
      gender: 'female',
      company: 'Insuron',
    },
    {
      name: 'Valenzuela Huff',
      gender: 'male',
      company: 'Applideck',
    },
    {
      name: 'Tiffany Anderson',
      gender: 'female',
      company: 'Zanymax',
    },
    {
      name: 'Jerri King',
      gender: 'female',
      company: 'Eventex',
    },
    {
      name: 'Rocha Meadows',
      gender: 'male',
      company: 'Goko',
    },
    {
      name: 'Marcy Green',
      gender: 'female',
      company: 'Pharmex',
    },
    {
      name: 'Kirk Cross',
      gender: 'male',
      company: 'Portico',
    },
    {
      name: 'Hattie Mullen',
      gender: 'female',
      company: 'Zilencio',
    },
    {
      name: 'Deann Bridges',
      gender: 'female',
      company: 'Equitox',
    },
    {
      name: 'Chaney Roach',
      gender: 'male',
      company: 'Qualitern',
    },
    {
      name: 'Consuelo Dickson',
      gender: 'female',
      company: 'Poshome',
    },
    {
      name: 'Billie Rowe',
      gender: 'female',
      company: 'Cemention',
    },
    {
      name: 'Bean Donovan',
      gender: 'male',
      company: 'Mantro',
    },
    {
      name: 'Lancaster Patel',
      gender: 'male',
      company: 'Krog',
    },
    {
      name: 'Rosa Dyer',
      gender: 'female',
      company: 'Netility',
    },
    {
      name: 'Christine Compton',
      gender: 'female',
      company: 'Bleeko',
    },
    {
      name: 'Milagros Finch',
      gender: 'female',
      company: 'Handshake',
    },
    {
      name: 'Ericka Alvarado',
      gender: 'female',
      company: 'Lyrichord',
    },
    {
      name: 'Sylvia Sosa',
      gender: 'female',
      company: 'Circum',
    },
    {
      name: 'Humphrey Curtis',
      gender: 'male',
      company: 'Corepan',
    },
  ];
  active = true;
  temp: any[] = [];
  cols: any = ['name', 'gender', 'company'];

  columns = [{ prop: 'name' }, { name: 'company' }, { name: 'gender' }];

  //**BootStrap TsCode */

  rows2: any[] = [
    {
      name: 'Ethel Price',
      gender: 'female',
      company: 'Johnson, Johnson and Partners, LLC CMP DDC',
      age: 22,
    },
    {
      name: 'Claudine Neal',
      gender: 'female',
      company: 'Sealoud',
      age: 55,
    },
    {
      name: 'Beryl Rice',
      gender: 'female',
      company: 'Velity',
      age: 67,
    },
    {
      name: 'Wilder Gonzales',
      gender: 'male',
      company: 'Geekko',
    },
    {
      name: 'Georgina Schultz',
      gender: 'female',
      company: 'Suretech',
    },
    {
      name: 'Carroll Buchanan',
      gender: 'male',
      company: 'Ecosys',
    },
    {
      name: 'Valarie Atkinson',
      gender: 'female',
      company: 'Hopeli',
    },
    {
      name: 'Schroeder Mathews',
      gender: 'male',
      company: 'Polarium',
    },
    {
      name: 'Lynda Mendoza',
      gender: 'female',
      company: 'Dogspa',
    },
    {
      name: 'Sarah Massey',
      gender: 'female',
      company: 'Bisba',
    },
    {
      name: 'Robles Boyle',
      gender: 'male',
      company: 'Comtract',
    },
    {
      name: 'Evans Hickman',
      gender: 'male',
      company: 'Parleynet',
    },
    {
      name: 'Dawson Barber',
      gender: 'male',
      company: 'Dymi',
    },
    {
      name: 'Bruce Strong',
      gender: 'male',
      company: 'Xyqag',
    },
    {
      name: 'Nellie Whitfield',
      gender: 'female',
      company: 'Exospace',
    },
    {
      name: 'Jackson Macias',
      gender: 'male',
      company: 'Aquamate',
    },
    {
      name: 'Pena Pena',
      gender: 'male',
      company: 'Quarx',
    },
    {
      name: 'Lelia Gates',
      gender: 'female',
      company: 'Proxsoft',
    },
    {
      name: 'Letitia Vasquez',
      gender: 'female',
      company: 'Slumberia',
    },
    {
      name: 'Trevino Moreno',
      gender: 'male',
      company: 'Conjurica',
    },
    {
      name: 'Barr Page',
      gender: 'male',
      company: 'Apex',
    },
    {
      name: 'Kirkland Merrill',
      gender: 'male',
      company: 'Utara',
    },
    {
      name: 'Blanche Conley',
      gender: 'female',
      company: 'Imkan',
    },
    {
      name: 'Atkins Dunlap',
      gender: 'male',
      company: 'Comveyor',
    },
    {
      name: 'Everett Foreman',
      gender: 'male',
      company: 'Maineland',
    },
    {
      name: 'Gould Randolph',
      gender: 'male',
      company: 'Intergeek',
    },
    {
      name: 'Kelli Leon',
      gender: 'female',
      company: 'Verbus',
    },
    {
      name: 'Freda Mason',
      gender: 'female',
      company: 'Accidency',
    },
    {
      name: 'Tucker Maxwell',
      gender: 'male',
      company: 'Lumbrex',
    },
    {
      name: 'Yvonne Parsons',
      gender: 'female',
      company: 'Zolar',
    },
    {
      name: 'Woods Key',
      gender: 'male',
      company: 'Bedder',
    },
    {
      name: 'Stephens Reilly',
      gender: 'male',
      company: 'Acusage',
    },
    {
      name: 'Mcfarland Sparks',
      gender: 'male',
      company: 'Comvey',
    },
    {
      name: 'Jocelyn Sawyer',
      gender: 'female',
      company: 'Fortean',
    },
    {
      name: 'Renee Barr',
      gender: 'female',
      company: 'Kiggle',
    },
    {
      name: 'Gaines Beck',
      gender: 'male',
      company: 'Sequitur',
    },
    {
      name: 'Luisa Farrell',
      gender: 'female',
      company: 'Cinesanct',
    },
    {
      name: 'Robyn Strickland',
      gender: 'female',
      company: 'Obones',
    },
    {
      name: 'Roseann Jarvis',
      gender: 'female',
      company: 'Aquazure',
    },
    {
      name: 'Johnston Park',
      gender: 'male',
      company: 'Netur',
    },
    {
      name: 'Wong Craft',
      gender: 'male',
      company: 'Opticall',
    },
    {
      name: 'Merritt Cole',
      gender: 'male',
      company: 'Techtrix',
    },
    {
      name: 'Dale Byrd',
      gender: 'female',
      company: 'Kneedles',
    },
    {
      name: 'Sara Delgado',
      gender: 'female',
      company: 'Netagy',
    },
    {
      name: 'Alisha Myers',
      gender: 'female',
      company: 'Intradisk',
    },
    {
      name: 'Felecia Smith',
      gender: 'female',
      company: 'Futurity',
    },
    {
      name: 'Neal Harvey',
      gender: 'male',
      company: 'Pyramax',
    },
    {
      name: 'Nola Miles',
      gender: 'female',
      company: 'Sonique',
    },
    {
      name: 'Herring Pierce',
      gender: 'male',
      company: 'Geeketron',
    },
    {
      name: 'Shelley Rodriquez',
      gender: 'female',
      company: 'Bostonic',
    },
    {
      name: 'Cora Chase',
      gender: 'female',
      company: 'Isonus',
    },
    {
      name: 'Mckay Santos',
      gender: 'male',
      company: 'Amtas',
    },
    {
      name: 'Hilda Crane',
      gender: 'female',
      company: 'Jumpstack',
    },
    {
      name: 'Jeanne Lindsay',
      gender: 'female',
      company: 'Genesynk',
    },
    {
      name: 'Frye Sharpe',
      gender: 'male',
      company: 'Eplode',
    },
    {
      name: 'Velma Fry',
      gender: 'female',
      company: 'Ronelon',
    },
    {
      name: 'Reyna Espinoza',
      gender: 'female',
      company: 'Prismatic',
    },
    {
      name: 'Spencer Sloan',
      gender: 'male',
      company: 'Comverges',
    },
    {
      name: 'Graham Marsh',
      gender: 'male',
      company: 'Medifax',
    },
    {
      name: 'Hale Boone',
      gender: 'male',
      company: 'Digial',
    },
    {
      name: 'Wiley Hubbard',
      gender: 'male',
      company: 'Zensus',
    },
    {
      name: 'Blackburn Drake',
      gender: 'male',
      company: 'Frenex',
    },
    {
      name: 'Franco Hunter',
      gender: 'male',
      company: 'Rockabye',
    },
    {
      name: 'Barnett Case',
      gender: 'male',
      company: 'Norali',
    },
    {
      name: 'Alexander Foley',
      gender: 'male',
      company: 'Geekosis',
    },
    {
      name: 'Lynette Stein',
      gender: 'female',
      company: 'Macronaut',
    },
    {
      name: 'Anthony Joyner',
      gender: 'male',
      company: 'Senmei',
    },
    {
      name: 'Garrett Brennan',
      gender: 'male',
      company: 'Bluegrain',
    },
    {
      name: 'Betsy Horton',
      gender: 'female',
      company: 'Zilla',
    },
    {
      name: 'Patton Small',
      gender: 'male',
      company: 'Genmex',
    },
    {
      name: 'Lakisha Huber',
      gender: 'female',
      company: 'Insource',
    },
    {
      name: 'Lindsay Avery',
      gender: 'female',
      company: 'Unq',
    },
    {
      name: 'Ayers Hood',
      gender: 'male',
      company: 'Accuprint',
    },
    {
      name: 'Torres Durham',
      gender: 'male',
      company: 'Uplinx',
    },
    {
      name: 'Vincent Hernandez',
      gender: 'male',
      company: 'Talendula',
    },
    {
      name: 'Baird Ryan',
      gender: 'male',
      company: 'Aquasseur',
    },
    {
      name: 'Georgia Mercer',
      gender: 'female',
      company: 'Skyplex',
    },
    {
      name: 'Francesca Elliott',
      gender: 'female',
      company: 'Nspire',
    },
    {
      name: 'Lyons Peters',
      gender: 'male',
      company: 'Quinex',
    },
    {
      name: 'Kristi Brewer',
      gender: 'female',
      company: 'Oronoko',
    },
    {
      name: 'Tonya Bray',
      gender: 'female',
      company: 'Insuron',
    },
    {
      name: 'Valenzuela Huff',
      gender: 'male',
      company: 'Applideck',
    },
    {
      name: 'Tiffany Anderson',
      gender: 'female',
      company: 'Zanymax',
    },
    {
      name: 'Jerri King',
      gender: 'female',
      company: 'Eventex',
    },
    {
      name: 'Rocha Meadows',
      gender: 'male',
      company: 'Goko',
    },
    {
      name: 'Marcy Green',
      gender: 'female',
      company: 'Pharmex',
    },
    {
      name: 'Kirk Cross',
      gender: 'male',
      company: 'Portico',
    },
    {
      name: 'Hattie Mullen',
      gender: 'female',
      company: 'Zilencio',
    },
    {
      name: 'Deann Bridges',
      gender: 'female',
      company: 'Equitox',
    },
    {
      name: 'Chaney Roach',
      gender: 'male',
      company: 'Qualitern',
    },
    {
      name: 'Consuelo Dickson',
      gender: 'female',
      company: 'Poshome',
    },
    {
      name: 'Billie Rowe',
      gender: 'female',
      company: 'Cemention',
    },
    {
      name: 'Bean Donovan',
      gender: 'male',
      company: 'Mantro',
    },
    {
      name: 'Lancaster Patel',
      gender: 'male',
      company: 'Krog',
    },
    {
      name: 'Rosa Dyer',
      gender: 'female',
      company: 'Netility',
    },
    {
      name: 'Christine Compton',
      gender: 'female',
      company: 'Bleeko',
    },
    {
      name: 'Milagros Finch',
      gender: 'female',
      company: 'Handshake',
    },
    {
      name: 'Ericka Alvarado',
      gender: 'female',
      company: 'Lyrichord',
    },
    {
      name: 'Sylvia Sosa',
      gender: 'female',
      company: 'Circum',
    },
    {
      name: 'Humphrey Curtis',
      gender: 'male',
      company: 'Corepan',
    },
  ];
  loadingIndicator = true;
  reorderable = true;

  columns1 = [
    { prop: 'name', summaryFunc: () => null },
    {
      name: 'Gender',
      summaryFunc: (cells: string[]) => this['summaryForGender'](cells),
    },
    { name: 'Company', summaryFunc: () => null },
  ];
  //**Column Toggel */
  rows3 = [
    {
      name: 'Claudine Neal',
      gender: 'female',
      company: 'Sealoud',
    },
    {
      name: 'Beryl Rice',
      gender: 'female',
      company: 'Velity',
    },
  ];

  columns2 = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }];

  allColumns = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }];

  //**Column Pinning */
  row6: any[] = [
    {
      id: 0,
      name: 'Ramsey Cummings',
      gender: 'male',
      age: 52,
      address: {
        state: 'South Carolina',
        city: 'Glendale',
      },
    },
    {
      id: 1,
      name: 'Stefanie Huff',
      gender: 'female',
      age: 70,
      address: {
        state: 'Arizona',
        city: 'Beaverdale',
      },
    },
    {
      id: 2,
      name: 'Mabel David',
      gender: 'female',
      age: 52,
      address: {
        state: 'New Mexico',
        city: 'Grazierville',
      },
    },
    {
      id: 3,
      name: 'Frank Bradford',
      gender: 'male',
      age: 61,
      address: {
        state: 'Wisconsin',
        city: 'Saranap',
      },
    },
    {
      id: 4,
      name: 'Forbes Levine',
      gender: 'male',
      age: 34,
      address: {
        state: 'Vermont',
        city: 'Norris',
      },
    },
    {
      id: 5,
      name: 'Santiago Mcclain',
      gender: 'male',
      age: 38,
      address: {
        state: 'Montana',
        city: 'Bordelonville',
      },
    },
    {
      id: 6,
      name: 'Merritt Booker',
      gender: 'male',
      age: 33,
      address: {
        state: 'New Jersey',
        city: 'Aguila',
      },
    },
    {
      id: 7,
      name: 'Oconnor Wade',
      gender: 'male',
      age: 18,
      address: {
        state: 'Virginia',
        city: 'Kenmar',
      },
    },
    {
      id: 8,
      name: 'Leigh Beasley',
      gender: 'female',
      age: 53,
      address: {
        state: 'Texas',
        city: 'Alfarata',
      },
    },
    {
      id: 9,
      name: 'Johns Wood',
      gender: 'male',
      age: 52,
      address: {
        state: 'Maine',
        city: 'Witmer',
      },
    },
    {
      id: 10,
      name: 'Thompson Hays',
      gender: 'male',
      age: 38,
      address: {
        state: 'Nevada',
        city: 'Kipp',
      },
    },
    {
      id: 11,
      name: 'Hallie Mack',
      gender: 'female',
      age: 19,
      address: {
        state: 'Minnesota',
        city: 'Darrtown',
      },
    },
    {
      id: 12,
      name: 'Houston Santos',
      gender: 'male',
      age: 24,
      address: {
        state: 'Georgia',
        city: 'Crucible',
      },
    },
    {
      id: 278,
      name: 'Katy Kirby',
      gender: 'female',
      age: 38,
      address: {
        state: 'Louisiana',
        city: 'Rodanthe',
      },
    },
  ];
  //**selection callback diseable selctiones */
  selected: any[] = [];

  columns3: any[] = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  offset: number | undefined;
  serverResultsService: any;

  onSelect({ selected }: { selected: any }) {
    console.log('Select Event', selected, this.selected);
    this.selected = [...selected]; // Set the selected items
  }

  onActivate(event: any) {
    console.log('Activate Event', event);
  }

  checkSelectable(event: { name: string }) {
    console.log('Checking if selectable', event);
    return event.name !== 'Ethel Price';
  }

  //** End selection callback diseable selctiones */
  //**custom Sorting Comparator */
  columns5 = [
    { name: 'Company', comparator: this.companyComparator.bind(this) },
    { name: 'Name', sortable: false },
    { name: 'Gender', sortable: false },
  ];
  companyComparator(
    propA: { toLowerCase: () => string },
    propB: { toLowerCase: () => string }
  ) {
    const valueA = propA ? propA.toLowerCase() : '';
    const valueB = propB ? propB.toLowerCase() : '';

    if (valueA < valueB) {
      return -1;
    } else if (valueA > valueB) {
      return 1;
    } else {
      return 0;
    }
  }
  //** END custom Sorting Comparator --> */
  //**inline editing */
  editing: { [key: string]: boolean } = {};
  row7: any[] = [
    {
      name: 'Ethel Price',
      gender: 'female',
      company: 'Johnson, Johnson and Partners, LLC CMP DDC',
      age: 22,
    },
    {
      name: 'Claudine Neal',
      gender: 'female',
      company: 'Sealoud',
      age: 55,
    },
    {
      name: 'Beryl Rice',
      gender: 'female',
      company: 'Velity',
      age: 67,
    },
    {
      name: 'Wilder Gonzales',
      gender: 'male',
      company: 'Geekko',
    },
    {
      name: 'Georgina Schultz',
      gender: 'female',
      company: 'Suretech',
    },
    {
      name: 'Carroll Buchanan',
      gender: 'male',
      company: 'Ecosys',
    },
    {
      name: 'Valarie Atkinson',
      gender: 'female',
      company: 'Hopeli',
    },
    {
      name: 'Schroeder Mathews',
      gender: 'male',
      company: 'Polarium',
    },
    {
      name: 'Lynda Mendoza',
      gender: 'female',
      company: 'Dogspa',
    },
    {
      name: 'Sarah Massey',
      gender: 'female',
      company: 'Bisba',
    },
    {
      name: 'Robles Boyle',
      gender: 'male',
      company: 'Comtract',
    },
    {
      name: 'Evans Hickman',
      gender: 'male',
      company: 'Parleynet',
    },
    {
      name: 'Dawson Barber',
      gender: 'male',
      company: 'Dymi',
    },
    {
      name: 'Bruce Strong',
      gender: 'male',
      company: 'Xyqag',
    },
    {
      name: 'Nellie Whitfield',
      gender: 'female',
      company: 'Exospace',
    },
    {
      name: 'Jackson Macias',
      gender: 'male',
      company: 'Aquamate',
    },
    {
      name: 'Pena Pena',
      gender: 'male',
      company: 'Quarx',
    },
    {
      name: 'Lelia Gates',
      gender: 'female',
      company: 'Proxsoft',
    },
    {
      name: 'Letitia Vasquez',
      gender: 'female',
      company: 'Slumberia',
    },
    {
      name: 'Trevino Moreno',
      gender: 'male',
      company: 'Conjurica',
    },
  ];
  constructor() {
    this.start();
    // [
    //   { name: 'John', gender: 'male', age: 30 },
    //   { name: 'Jane', gender: 'female', age: 25 },
    //   { name: 'John', gender: 'male', age: 30 },
    // ];
  }

  updateValue(event: any, cell: string, rowIndex: number) {
    // Update the value in the rows array
    this.rows[rowIndex][cell] = event.target.value;
    // console.log('UPDATED!', this.rows[rowIndex][cell]);

    // Set the editing flag to false
    this.editing[rowIndex + '-' + cell] = false;
  }
  //** END inline editing */
  toggle(
    col: { prop: string; name?: undefined } | { name: string; prop?: undefined }
  ) {
    const isChecked = this.isChecked(col);

    if (isChecked) {
      this.columns2 = this.columns2.filter((c) => {
        return c.name !== col.name;
      });
    } else {
      if ('name' in col) {
        this.columns2 = [...this.columns2, col as { name: string }];
      }
    }
    console.log('1');
  }

  isChecked(
    col: { prop: string; name?: undefined } | { name: string; prop?: undefined }
  ) {
    return (
      this.columns2.find((c) => {
        return c.name === col.name;
      }) !== undefined
    );
  }

  randomNum(start: number, end: number): number {
    return Math.floor(Math.random() * end) + start;
  }

  start(): void {
    if (!this.active) {
      return;
    }

    setTimeout(this.updateRandom.bind(this), 50);
  }

  stop(): void {
    this.active = false;
  }

  add() {
    this.rows1.splice(0, 0, this.temp[this.count++]);
  }

  remove() {
    this.rows1.splice(0, this.rows.length);
  }

  updateRandom() {
    const rowNum = this.randomNum(0, 5);
    const cellNum = this.randomNum(0, 3);
    const newRow = this.randomNum(0, 100);
    const prop = this.cols[cellNum];
    const rows = this.rows;

    if (this.rows1.length) {
      const row = this.rows1[rowNum];
      row[prop] = this.rows1[newRow][prop];
      row.updated = Date.now().toString();
    }

    this.rows1 = [...this.rows1];

    // this.cd.markForCheck();
    // this.mydatatable.update();
    this.start();
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    // Filter the data and update the rows
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.row = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onSelect1({ selected1 }: { selected1: any }) {
    console.log('Select Event', selected1, this['selected1']);
    this.selected = [...selected1]; // Set the selected items
  }

  onActivate1(event: any) {
    // console.log('Activate Event', event);
  }

  add1() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [this.rows[1], this.rows[3]];
  }

  remove1() {
    this.selected = [];
  }
}

