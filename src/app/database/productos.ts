import { Producto } from "../interfaces/productos";

export const productos: Producto[] = [
  {
    categoria: 1,
    titulo: 'SWITCH POE UNIFI 24 PUERTOS',
    marca: 'Ubiquiti',
    descripcion: 'SWITCH UNIFI DE 24 PUERTOS*6 PUERTOS GIGABIT*16 PUERTOS POE/AF/AT*2 PUERTOS SFP *MAXIMO CONSUMO DE ENERGIA 95W *CAPACIDAD SWITCHING 52GBPS *RACKEABLE*',
    imagen: 'assets/products/network/switch-ubiquiti-poe-24.png'
  },
  {
    categoria: 1,
    titulo: 'HAP MINI 2.4GHz',
    marca: 'Mikrotik',
    descripcion: 'ACCESS POINT HAP MINI*FRECUENCIA 2.4GHz *ANTENAS INTEGRADAS 1.5DBI *POTENCIA 22DBM *PUERTO ETH (3)10/100MBPS *LICENCIA NIVEL 4*FUENTE INCLUIDA TIPO MICRO USB*',
    imagen: 'assets/products/network/hap-mini-mikrotik.png'
  },
  {
    categoria: 1,
    titulo: 'ROUTER GATEWAY GIGA USG PRO4',
    marca: 'Ubiquiti',
    descripcion: 'ROUTER UNIFI ENTERPRISE GIGABIT*2 PUERTOS GIGABIT*2 PUERTOS SFP COMBINADOS*RENDIMIENTO DE FIREWALL*SOPORTA VLAN*VPN*2GB DDR3 RAM *4 GB FLASH*RACKEABLE*LAYER 3*',
    imagen: 'assets/products/network/gateway-router-ubiquiti.png'
  },
  {
    categoria: 1,
    titulo: 'ACCESS POINT WIFI 6E ENTERPRISE UNIFI AC',
    marca: 'Ubiquiti',
    descripcion: 'ACCESS POINT WIFI 6E ENTERPRISE* FRECC 2.4/5/6 GHZ* SEMI/INTERIOR(IP 54) FULL DUPLEX*802.3AT*8 SSID X RADIO*(SIN INYECTOR POE)* 600 USUARIOS*',
    imagen: 'assets/products/network/access-point-ubiquiti.png'
  },
  {
    categoria: 1,
    titulo: 'SWITCH JETSTREAM 24 GIGABIT L2 - 4 SFP',
    marca: 'Tp-link',
    descripcion: 'SWITCH JETSTREAM*24 PUERTOS GIGABIT L2*4 PUERTOS SFP*SOPORTA VLAN *SOPORTA QOS*ADMINISTRACION WEB/CLI*SOPORTA SNMP-ROM*STP/RSTP/MSTP *RACKEABLE*CAPA 2*',
    imagen: 'assets/products/network/switch-tplink-jetstream-24.png'
  },
  {
    categoria: 1,
    titulo: 'CENTRAL IP 4 TRONCALES - 4 FXO - 4 FXS',
    marca: 'Grandstream',
    descripcion: 'CENTRAL IP 4 TRONCALES *4 PUERTOS FXO *4 PUERTOS FXS *1000 CUENTAS SIP *150 LAMADAS SIMULTANEAS *SOPORTA ALIMENTACION POE *3 ETH GIGABIT POE * NAT* SOLO AUDIO*',
    imagen: 'assets/products/network/grandstream-central-4.png'
  },
  {
    categoria: 1,
    titulo: 'TELEFONO IP GXP2140',
    marca: 'Grandstream',
    descripcion: 'TELEFONO IP *4 LINEAS SIP *SOPORTA MODULOS GXP2200EXT PARA BLF *PANTALLA DE 4.3" *SOPORTA BLUETOOTH *SOPORTA POE 802.3AF *AUDIO HD *2 PUERTOS GIGABIT',
    imagen: 'assets/products/network/telefono-ip-grandstream-2140.png'
  },
  {
    categoria: 1,
    titulo: 'TELEFONO IP POE T33G',
    marca: 'Yealink',
    descripcion: 'TELEFONO IP POE T33G*4 LINEA SIP *2 PUERTOS GIGA*DC5V *DISPLAY 2,3"*5 TECLAS PROGRAMABLES *CONFERENCIA DE 5 VIAS*INCLUYE FUENTE*AUDIO HD*',
    imagen: 'assets/products/network/telefono-ip-T33G-yealink.png'
  },
  {
    categoria: 1,
    titulo: 'CABLE UTP CAT-6 INTERIOR',
    marca: 'Corning',
    descripcion: 'CABLE UTP CAT. 6 INTERIOR X 305MTS GLC MAX 100% COBRE* 23 AWG* TIPO DE AISLAMIENTO POLIETILENO* 4 PARES* TIPO DE CUBIERTA PVC*COLOR BLANCO*',
    imagen: 'assets/products/network/cable-futurecom-6.png'
  },
  {
    categoria: 1,
    titulo: 'CABLE UTP CAT-5E EXTERIOR',
    marca: 'Dimax',
    descripcion: 'CABLE UTP CAT 5E (80%COBRE)*EXTERIORES CON MENSAJERO*24 AWG 4 PARES 0.5MM CCA*305 METROS OUTDOOR COLOR NEGRO*CARRETE DE MADERA*',
    imagen: 'assets/products/network/cable-dimax-5e.png'
  },
  {
    categoria: 1,
    titulo: 'PATCH PANEL CAT-6 24 PUERTOS',
    marca: 'Kuwes',
    descripcion: 'PATCH PANEL CATEGORIA 6* PRE CARGADO CON 24 KEYSTONE* 24 PUERTOS* COLOR NEGRO* CUENTA CON CERTIFICACION UL*',
    imagen: 'assets/products/network/patchpanel-kuwes.png'
  },
  {
    categoria: 1,
    titulo: 'CONECTOR RJ45 CAT6 (10 UNIDADES)',
    marca: 'Dimax',
    descripcion: 'CONECTOR RJ45 CAT6 BOLSA 10 UNIDADES* TERMOPLASTICOS* ALTO IMPACTO* 8 CONTACTOS DE BRONCE',
    imagen: 'assets/products/network/conector-rj45-dimax.png'
  },
  {
    categoria: 2,
    titulo: 'CAMARA HDCVI COOPER DOMO 5MP',
    marca: 'Dahua',
    descripcion: 'CAMARA HDCVI COOPER DOMO 5MP *SENSOR 1/2.7" CMOS *CVI/CVBS/AHD/TVI *LENTE 2.8MM *SMART IR MAX 20M *IP67 *MAX 25 FPS@5MP *MATERIAL ALUMINIO *BLC / HLC / DWDR',
    imagen: 'assets/products/cameras/camara-analogica-5mp-dahua.png'
  },
  {
    categoria: 2,
    titulo: 'CAMARA DOMO IP 2MP FULL COLOR',
    marca: 'Dahua',
    descripcion: 'CAMARA DOMO IP 2MP FULL COLOR *DOBLE ILUMINACIÓN INTELIGENTE *SENSOR 1/2.8" CMOS *H.265 CODEC *LUZ CALIDA Y LED IR *DIST. ILUMIN 30M * SOP. MICRO SD 256GB *IP67',
    imagen: 'assets/products/cameras/camara-ip-fullcolor-dahua.png'
  },
  {
    categoria: 2,
    titulo: 'CAMARA IP BALA 2MP',
    marca: 'Dahua',
    descripcion: 'CAMARA IP BALA 2MP *METAL+PLASTICO *1/2.7” PROGRESSIVE CMOS *LENTE 2,8MM *25/30fps@1080P(1920×1080) *DWDR, Day/Night(ICR), 3DNR *MAX IR 30M *IP67 *POE',
    imagen: 'assets/products/cameras/camara-ip-bala-dahua.png'
  },
  {
    categoria: 2,
    titulo: 'GRABADOR PENTAHIBRIDO DE 8CH WIZSENSE',
    marca: 'Dahua',
    descripcion: 'GRABADOR PENTAHIBRIDO DE 8CH *WIZSENSE *5M-N/1080P *MAX 12CH IP *REC. FACIAL *SMD PLUS *PROTEC. PERIMETRAL *1 HDD HASTA 16TB *1 RS485 *2USB, 1HDMI, 1VGA',
    imagen: 'assets/products/cameras/grabador-dahua-8ch.png'
  },
  {
    categoria: 2,
    titulo: 'KIT DE VIDEO PORTERO IP',
    marca: 'Dahua',
    descripcion: 'KIT DE VIDEO PORTERO IP *MONITOR 7" TFT *ALARMA 6I/1O *POR ESTANDAR *FRENTE DE CALLE HD *IP65 *ILUMINACION AUTO IR *INGRESO CON TARJETA, POR APP O MONITOR',
    imagen: 'assets/products/cameras/kit-videoportero-ip-dahua.png'
  },
  {
    categoria: 2,
    titulo: 'DISCO DURO 4TB PARA CCTV',
    marca: 'Western Digital',
    descripcion: 'DISCO DURO WESTERN DIGITAL PURPLE 4TB *INTERFASE SATA 6Gb/s 5400 RPM *CMR *SENSORES RV *TASA DE TRANSFERENCIA 180MB/s * BAJO CONSUMO',
    imagen: 'assets/products/cameras/disco-duro-westerndigital-4tb.png'
  },
  {
    categoria: 2,
    titulo: 'FUENTE DE PODER TIPO REJILLA 12VDC 10A',
    marca: 'Dimax',
    descripcion: 'FUENTE DE PODER 12VDC, 10A *BORNERA DE CONEXION GENERAL *SOPORTA CAMARAS *CONTROLES DE ACCESO *CHAPAS *DIST. HASTA 6M PARA MAX. 6 CAMARAS.',
    imagen: 'assets/products/cameras/fuente-10A-dimax.png'
  },
  {
    categoria: 2,
    titulo: 'VIDEO BALUM 4 EN 1 / 720P-1080P',
    marca: 'Dahua',
    descripcion: 'BALUN PASIVO DE VIDEO*TRANSMISOR DE VIDEO HDCVI,AHD, ANALOGO, TVI *MAX. HASTA 400M EN 720P, 250m en 1080P*REDUCCION DE RUIDO',
    imagen: 'assets/products/cameras/balun-dahua720p.png'
  },
  {
    categoria: 3,
    titulo: 'PARLANTE DE TECHO DE 3.75-7.5-15W',
    marca: 'ITC',
    descripcion: 'PARLANTE DE TECHO 8” (CIELO FALSO) *POTENCIA 1.85W, 3.75W, 7.5W, 15W A 100V *NIVEL DE PRESIÓN SONORA 90DB 1W/1M.*FRECUENCIA DE RESPUESTA 90HZ - 20KHZ',
    imagen: 'assets/products/soundsystem/parlante-interior-itc.png'
  },
  {
    categoria: 3,
    titulo: 'PARLANTE DE EXTERIOR DE 15-30-100W',
    marca: 'ITC',
    descripcion: 'PARLANTE TIPO CORNETA *POTENCIA 15W, 30W 100V *NIVEL DE PRESIÓN SONORA 103DB 1W/1M.*FRECUENCIA DE RESPUESTA 300HZ - 13KHZ *PROTECCION IP66',
    imagen: 'assets/products/soundsystem/parlante-exterior-itc.png'
  },
  {
    categoria: 3,
    titulo: 'SIRENA ESP-30 DE 30W',
    marca: 'Dimax',
    descripcion: 'SIRENA DE DOS TONOS PARA EXTERIORES*ALIMENTACIÓN 12V DC*30 WATT DE POTENCIA*112 DB (± 3DB).',
    imagen: 'assets/products/soundsystem/bocina-exterior-dimax.png'
  },
  {
    categoria: 3,
    titulo: 'MICROFONO SELECTOR DE 4 ZONAS',
    marca: 'ITC',
    descripcion: 'MICROFONO TIPO CONDENSADOR 4 ZONAS *COMPATIBLE CON T-4120MP *FRECUENCIA DE RESPUESTA 80HZ–18KHZ *SENSIBILIDAD -50DB *ALIMENTACIÓN POR LA CENTRAL O 24VDC',
    imagen: 'assets/products/soundsystem/microfono-itc-4ch.png'
  },
  {
    categoria: 4,
    titulo: 'CENTRAL DE INCENDIO CONVENCIONAL',
    marca: 'Cofem',
    descripcion: 'CENTRAL DE INCENDIO CONVENCIONAL, SOPORTA HASTA 12 ZONAS, SOPORTA HASTA 32 DISPOSITIVOS POR ZONA, SENSORES Y PULSADORES',
    imagen: 'assets/products/fire-alarms/panel-incendio-cofem.png'
  },
  {
    categoria: 4,
    titulo: 'PULSADOR PARA ALARMA PUC-AR',
    marca: 'Cofem',
    descripcion: 'PULSADOR PARA ALARMA CONVENCIONAL',
    imagen: 'assets/products/fire-alarms/jalador-pucar-cofem.png'
  },
  {
    categoria: 4,
    titulo: 'LUZ INDICADOR DE ACCION REMOTO PIAL',
    marca: 'Cofem',
    descripcion: 'LUZ INDICADOR DE ACCIÓN REMOTO*SE CONECTA DIRECTAMENTE AL SENSOR DIRECCIONABLE O CONVENCIONAL PARA ALERTAR EN CASO DE ALARMA.',
    imagen: 'assets/products/fire-alarms/luz-pial-cofem.png'
  },
  {
    categoria: 4,
    titulo: 'SIRENA ESTROBOSCOPICA SIR24F',
    marca: 'Cofem',
    descripcion: 'SIRENA ESTROBOSCOPICA CONVENCIONAL*SU POTENCIA DE SONIDO ES DE 85 dB.',
    imagen: 'assets/products/fire-alarms/sirena-cofem.png'
  },
  {
    categoria: 4,
    titulo: 'SENSOR DE HUMO A30-XH',
    marca: 'Cofem',
    descripcion: 'SENSOR ÓPTICO DE HUMO CONVENCIONAL*INCORPORA UN SENSOR TERMICO QUE SE ACTIVA AL LLEGAR A UNA TEMPERATURA 55ºC*NO INCLUYE BASE.',
    imagen: 'assets/products/fire-alarms/sensor-humo-cofem.png'
  },
  {
    categoria: 4,
    titulo: 'BASE P/SENSORES DIRECCIOBALES Y CONVENCIONALES',
    marca: 'Cofem',
    descripcion: 'BASE PARA SENSORES DIRECCIONABLES O CONVENCIONALES DE INCENDIO COFEM. COMPATIBLES SOLO CON SISTEMAS DE INCENDIO DE DOS HILOS',
    imagen: 'assets/products/fire-alarms/base-cofem.png'
  },
  {
    categoria: 5,
    titulo: 'CENTRAL DE ALARMA ACTIVE 20',
    marca: 'JFL',
    descripcion: 'CENTRAL DE ALARMA MONITOREABLE, SOPORTA 22 ZONAS, OPCION INALAMBRICA Y DE MONITOREO POR APLICACION MOVIL, VIENE SIN TECLADO Y MODULO IP, SOPORTA SIRENA 15WATTS',
    imagen: 'assets/products/alarms/panel-active20-jfl.png'
  },
  {
    categoria: 5,
    titulo: 'TECLADO LCD K32LCD+',
    marca: 'Paradox',
    descripcion: 'TECLADO LCD DE 32, CARACTERES COMPATIBLE CON SP Y MG, NUEVO MODELO DE TECLADO LCD.',
    imagen: 'assets/products/alarms/teclado-k32lcd-paradox.png'
  },
  {
    categoria: 5,
    titulo: 'SENSOR DE MOVIMIENTO PARA INTEMPERIE DG85',
    marca: 'Paradox',
    descripcion: 'SENSOR INFRARROJO DIGITAL PARA INTEMPERIE*INMUNIDAD REAL CONTRA MASCOTAS DE 40KG*CAJA RESISTENTE A GOLPES Y A LA TEMPERATURA*ANGULO DE VISION DE 90°.',
    imagen: 'assets/products/alarms/sensor-movimiento-paradox.png'
  },
  {
    categoria: 5,
    titulo: 'CONTACTO MAGNÉTICO INALÁMBRICO HC-FIT',
    marca: 'JFL',
    descripcion: 'CONTACTO MAGNÉTICO INALÁMBRICO*FRECUENCIA 433.92 MHZ*TECNOLOGÍA HOPPING CODE* ALCANCE DE HASTA 150M LIBRE DE OBSTACULO*BATERÍA CR2032.',
    imagen: 'assets/products/alarms/sensor-magnetico-jfl.png'
  },
  {
    categoria: 5,
    titulo: 'FOTOCELULA DE 100 METROS',
    marca: 'Dimax',
    descripcion: 'FOTOCELULA DE 100 METROS, DOS HAZ DE LUZ QUE EVITAN FALSAS ALARMAS',
    imagen: 'assets/products/alarms/fotocelula-dimax.png'
  }
];
