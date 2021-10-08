export default {
	actions: {
		glory({ dispatch }, value) {
			let gloryAll = value.trim().split(/\n/gi)
			// console.log(gloryAll)
			let gloryParse = ''

			for (let i = 0; i < gloryAll.length; i++) {
				const el = gloryAll[i].split(' ')
				const a = new Date(el[4]).toString().split(' ')
				const b = new Date(el[5]).toString().split(' ')
				// console.log(el)
				// console.log(a)
				try {
					gloryParse += `${el[0]} ${a[2]}${a[1].toUpperCase()}${a[3].slice(
						-2
					)} ${el[1]}${el[2]} ${a[4]
						.split(':')
						.join('')
						.slice(0, 4)} ${b[4]
						.split(':')
						.join('')
						.slice(0, 4)} ${b[2]}${b[1].toUpperCase()}${b[3].slice(-2)}</br>`
					// console.log(gloryParse)
				} catch (e) {
					return 'Некоректний вибір опції або неповний/некоректний рядок</br>'
				}
			}
			// console.log(gloryParse)
			return gloryParse
		},

		// parser kiwi
		kiwi({ dispatch }, value) {
			let kiwiAll = value.trim().split(/\n/gi)
			// console.log(kiwiAll, kiwiAll.length / 3)
			let kiwiToFilter = []
			let kiwiParse = ''

			// мощь
			for (let i = 0; i < kiwiAll.length / 15; i++) {
				kiwiToFilter[i] = kiwiAll.slice(i * 15, i * 15 + 15)
			}
			// console.log(kiwiToFilter)
			try {
				for (let i = 0; i < kiwiToFilter.length; i++) {
					const el = kiwiToFilter[i]
					// console.log(el)
					kiwiParse += `${el[10].replace(' ', '')} ${
						el[1]
							.toUpperCase()
							.slice(-6)
							.replace(/ /g, '').length < 5
							? '0' +
							  el[1]
									.toUpperCase()
									.slice(-6)
									.replace(/ /g, '')
							: el[1]
									.toUpperCase()
									.slice(-6)
									.replace(/ /g, '')
					} ${el[3]}${el[14]} ${el[0].replace(':', '')} ${el[11].replace(
						':',
						''
					)} ${
						el[12]
							.toUpperCase()
							.slice(-6)
							.replace(/ /g, '').length < 5
							? '0' +
							  el[12]
									.toUpperCase()
									.slice(-6)
									.replace(/ /g, '')
							: el[12]
									.toUpperCase()
									.slice(-6)
									.replace(/ /g, '')
					}</br>`
				}
			} catch (e) {
				return 'Некоректний вибір опції або неповний/некоректний рядок</br>'
			}
			// console.log(kiwiParse)
			return kiwiParse
		},

		// parser arystan
		arystan({ dispatch }, value) {
			let arystanAll = value.trim().split(/\n/gi)
			// console.log(arystanAll)
			let arystanParse = ''
			try {
				for (let i = 0; i < arystanAll.length; i++) {
					const el = arystanAll[i].split(' ')
					const a = new Date(el[2].split(el[2][2]).reverse())
						.toString()
						.split(' ')
					// console.log(el)
					// console.log(el[2][2])
					// console.log(a)
					arystanParse += `${el[0]} ${a[2]}${a[1].toUpperCase()}${a[3].slice(
						-2
					)} ${el[1].replace('-', '')} ${el[3].replace(
						':',
						''
					)} ${el[5].replace(':', '')}</br>`
				}
			} catch (e) {
				return 'Некоректний вибір опції або неповний/некоректний рядок</br>'
			}
			// console.log(arystanParse)
			return arystanParse
		},

		// parser TUI
		tui({ dispatch }, value) {
			let tuiAll = value
				.trim()
				.replaceAll('Стало: ', '')
				.split(/\n/gi)
			// console.log(tuiAll)
			let tui = ''

			try {
				for (let i = 0; i < tuiAll.length; i++) {
					const el = tuiAll[i].split(' ')
					const a = new Date(el[2].split('.').reverse()).toString().split(' ')
					// console.log(a)
					// console.log(el)
					tui += `${el[0]}${el[1]} ${a[2]}${a[1].toUpperCase()}${a[3].slice(
						-2
					)} ${el[4].slice(1, -1)}${el[8].slice(1, -1)} ${el[5].replace(
						':',
						''
					)} ${el[9].replace(':', '')}</br>`
				}
			} catch (error) {
				return 'Некоректний вибір опції або неповний/некоректний рядок</br>'
			}
			// console.log(tui)
			return tui
		},

		// parser SkyUP
		skyUp({ dispatch }, value) {
			try {
				if (value.includes('Changes of your flight')) {
					let skyUpAll = value.trim().split(/\n/gi)
					let info = [
						skyUpAll[1]
							.slice(skyUpAll[1].indexOf(':'), -1)
							.replaceAll(':', '')
							.replaceAll('–', ' ')
							.replaceAll('-', ' ')
							.split(' ')
							.filter((e) => e !== ''),
						skyUpAll[0]
							.split(' ')
							.filter((e) => e.includes('PQ'))
							.toString(),
					]

					let date = new Date(info[0][0].split('/').reverse())
						.toString()
						.split(' ')
					// console.log(info)
					// console.log(date)
					return `${info[1]} ${date[2]}${date[1].toUpperCase()}${date[3].slice(
						2
					)} ${info[0][1]}${info[0][2]} ${info[0][3]} ${info[0][4]}</br>`
				} else {
					let skyUpAll = value.trim().split(/\n/gi)
					// console.log(skyUpAll)
					return `${skyUpAll[0].split(':')[1].trim()} ${skyUpAll[4]
						.split(',')[0]
						.slice(0, -5)
						.replace(' ', '')
						.toUpperCase()}${skyUpAll[4]
						.split(',')[0]
						.slice(-2)} ${skyUpAll[5].slice(-4, -1)}${skyUpAll[10].slice(
						-4,
						-1
					)} ${skyUpAll[4].slice(-5).replace(':', '')} ${skyUpAll[9]
						.slice(-5)
						.replace(':', '')}</br>`
				}
			} catch (e) {
				return 'Некоректний вибір опції або неповний/некоректний рядок</br>'
			}
		},

		// parser S7
		s7({ dispatch }, value) {
			try {
				let month = [
					'янв',
					'фев',
					'мар',
					'апр',
					'май',
					'июнь',
					'июль',
					'авг',
					'сен',
					'окт',
					'ноя',
					'дек',
				]
				let s7Filter = []
				let s7 = ''
				let s7All = value
					.trim()
					.split(/\n/gi)
					.filter(
						(e) =>
							!e.match(/UN\d/) &&
							!e.match(/TK\d/) &&
							!e.match(/HK\d/) &&
							!e.includes('→') &&
							!e.includes(' день') &&
							!e.includes('GMT') &&
							e !== ''
					)
					.map((e) => e.replace('Эконом', ''))
					.map((e) => e.trim())
				for (let i = 0; i < s7All.length / 7; i++) {
					s7Filter[i] = s7All.slice(i * 7, i * 7 + 7)
				}
				// console.log(s7Filter)
				for (let j = 0; j < s7Filter.length; j++) {
					const el = s7Filter[j]
					// console.log(el)
					const date = new Date(
						new Date().getFullYear(),
						month.indexOf(el[1]),
						el[0]
					)
						.toString()
						.split(' ')
					// console.log(date)
					s7 += `${el[2]} ${date[2]}${date[1].toUpperCase()}${date[3].slice(
						2
					)} ${el[3]}${el[5]} ${el[4].replace(':', '')} ${el[6].replace(
						':',
						''
					)}</br>`
				}
				return s7
			} catch (error) {
				return 'Некоректний вибір опції або неповний/некоректний рядок</br>'
			}
		},

		docs({ dispatch }, value) {
			let amadeus,
				sabre,
				foid,
				contacts,
				totalString = ''
			value = value.split('Информация о пассажирах[+]').map((el) => {
				return el
					.split('\n')
					.map((e) => e.trim())
					.map((e) => e.split('\t'))
					.filter((e) => e.toString() !== '')
			})
			// console.log(value)
			try {
				foid = value[1]
					.filter((el) => el.length <= 10)
					.map((e) => {
						return `3FOID/PP${e[6].slice(-3, -1)}${e[7] ? e[7] : `#passport`}-`
					})
					.join('</br>')
				amadeus = value[1]
					.filter((el) => el.length <= 10)
					.map((e) => {
						let birthday = new Date(
							e[4]
								.split('-')
								.reverse()
								.join(',')
						)
							.toDateString()
							.split(' ')
						// console.log(birthday)
						let documentValidity = new Date(
							e[8]
								.split('-')
								.reverse()
								.join(',')
						)
							.toDateString()
							.split(' ')
						// console.log(documentValidity)

						return `SR DOCS YY HK1-P-${e[6].slice(-3, -1)}-${
							e[7] ? e[7] : `#passport`
						}-${e[6].slice(-3, -1)}-${
							birthday[2]
						}${birthday[1].toUpperCase()}${birthday[3].slice(-2)}-F-${
							documentValidity[2]
						}${documentValidity[1].toUpperCase()}${documentValidity[3].slice(
							-2
						)}-${e[1]}-${e[2]}/P`
					})
					.join('</br>')
				// console.log(amadeus)

				sabre = value[1]
					.filter((el) => el.length <= 10)
					.map((e) => {
						let birthday = new Date(
							e[4]
								.split('-')
								.reverse()
								.join(',')
						)
							.toDateString()
							.split(' ')
						// console.log(birthday)
						let documentValidity = new Date(
							e[8]
								.split('-')
								.reverse()
								.join(',')
						)
							.toDateString()
							.split(' ')
						// console.log(documentValidity)
						return `3DOCS/P/${e[6].slice(-3, -1)}/${
							e[7] ? e[7] : `#passport`
						}/${e[6].slice(-3, -1)}/${
							birthday[2]
						}${birthday[1].toUpperCase()}${birthday[3].slice(-2)}/F/${
							documentValidity[2]
						}${documentValidity[1].toUpperCase()}${documentValidity[3].slice(
							-2
						)}/${e[1]}/${e[2]}-`
					})
					.join('</br>')
				contacts = `<b><i>Amadeus:</i></b></br>SR CTCE YY - ${value[0][1][1]
					.toUpperCase()
					.replace('@', '//')}</br>SR CTCM YY - ${
					value[0][1][2]
				}</br><b><i>Sabre:</i></b></br>3CTCE/${value[0][1][1]
					.toUpperCase()
					.replace('@', '//')}-</br>3CTCM/${value[0][1][2]}-`
			} catch (error) {
				return 'Некоректний вибір опції або неповний/некоректний рядок</br>'
			}

			// console.log(sabre)
			totalString += `<b>Amadeus:</b></br>${amadeus}</br><b>Sabre:</b></br>${sabre}</br><b>Contacts:</b></br>${contacts}</br><b>FOID:</b></br>${foid}</br>`
			return totalString
		},

		acrParse({ dispatch }, value) {
			let acr = value
				.replaceAll('¥', '/')
				.replaceAll('\n', '')
				.split('/')
				.map((e) => e.trim())

			console.log(acr)
			let acrFop = value.split(acr[1])[2]
			console.log(acrFop)

			let acrSecondFop = acrFop
				.replaceAll('¥', '/')
				.replaceAll('\n', '')
				.split('/')
				.map((e) => e.trim())
			console.log(acrSecondFop)

			let al = acr[0].split(' ')[acr[0].split(' ').length - 1]
			console.log(al)

			let nameFop = acr
				.filter((e) => e.includes('CA') || e.includes('CC') || e.includes('VI'))
				.join('')
				.replace(/\s{2,6}/gm, '')
				.split(' ')
			console.log(nameFop)

			let fair = acr[3].split(' ')[acr[3].split(' ').length - 1]
				? acr[3].split(' ')[acr[3].split(' ').length - 1]
				: acr[3]

			return `ACR/${al}/${acr[1]}/${acr[2]}/${fair}/${acr[4]}/ONE/${
				nameFop[0]
			} ${nameFop[1]} ${nameFop[2].slice(
				0,
				1
			)}/1/A/F(вставити інвойс)/(F або D))/E`
		},
	},
}
