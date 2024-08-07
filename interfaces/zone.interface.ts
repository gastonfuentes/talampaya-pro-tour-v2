

export interface Zone {

    name: ZoneName;
    categoria: number;
    genero: number;
    partido1: number;
    partido2: number;
    partido3: number;

    pareja1: number;
    pareja2: number;
    pareja3: number

}

export type ZoneName = 'ZONA A' | 'ZONA B' | 'ZONA C' | 'ZONA D' | 'ZONA E' | 'ZONA F' | 'ZONA G' | 'ZONA H' | 'ZONA I' | 'ZONA J' | 'ZONA K' | 'ZONA L' | 'ZONA M' | 'ZONA N' | 'ZONA O' | 'ZONA P'

export type ZoneDays = '15' | '16' | '17' | '18'

export type ZoneHours = '15:00' | '15:30' | '16:00' | '16:30'

export type ZoneClub = 'Cerro' | 'Mirador'

export type ZoneCourts = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8


