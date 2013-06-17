var language = {
	error_noview: 'Calendar: Vista {0} no encontrada',
	error_dateformat: 'Calendar: Formato de Fecha Inválido {0}. Debe ser "now" o con el formato "yyyy-mm-dd"',
	error_loadurl: 'Calendar: URL de datos no definida',
	error_where: 'Calendar: Direcciónd de navegación errónea {0}. Valores válidos: "next" o "prev" o "today"',

	title_year: 'Año {0}',
	title_month: '{0} año {1}',
	title_week: '{0} semana del año {1}',
	title_day: '{0} {1} {2} año {3}',

	week:'Semana',

	m0: 'Enero',
	m1: 'Febrero',
	m2: 'Marzo',
	m3: 'Abril',
	m4: 'Mayo',
	m5: 'Junio',
	m6: 'Julio',
	m7: 'Agosto',
	m8: 'Septiembre',
	m9: 'Octubre',
	m10: 'Noviembre',
	m11: 'Diciembre',

    ms0: 'Ene',
    ms1: 'Feb',
    ms2: 'Mar',
    ms3: 'Abr',
    ms4: 'May',
    ms5: 'Jun',
    ms6: 'Jul',
    ms7: 'Ago',
    ms8: 'Sep',
    ms9: 'Oct',
    ms10: 'Nov',
    ms11: 'Dic',

	d0: 'Domino',
	d1: 'Lunes',
	d2: 'Martes',
	d3: 'Miércoles',
	d4: 'Jueves',
	d5: 'Viernes',
	d6: 'Sábado'
};

if(!String.prototype.format) {
	String.prototype.format = function() {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined' ? args[number] : match;
		});
	};
}
