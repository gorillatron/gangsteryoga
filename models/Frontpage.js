
import keystone from 'keystone'
import split from 'split-array'

const Types = keystone.Field.Types


/**
 * Gallery Model
 * =============
 */

const Frontpage = new keystone.List('Gallery', {
	label: "Forside",
})


Frontpage.add({
	mainVideoUrl: { type: Types.Url, required: true, label: "video url", note: "For eksempel: https://player.vimeo.com/video/179913....", default: "https://player.vimeo.com/video/179913" },
  videoText: { type: Types.Text, required: true, label: "Video tekst", default: "How tough are you really?"},
  punchLine: { type: Types.Text, required: true, label: "Video tekst", default: "- If you got the balls!"},
  description: { type: Types.Markdown, required: true, label: "Video tekst", default: "Gangsteryoga i Norge er en idéell virksomhet som er underordnet stiftelsen «Yoga for Livet». Vårt langsiktige mål er å tilby forebyggende tiltak for ungdom på skråplanet og å gi tidligere innsatte muligheten til å bidra i prosessen. Gangsteryoga setter søkelys på det å være menneske og hvordan man får kontakt med det innerste i seg selv. Puste seg gjennom utfordringer. Kjenne på stivheter og ubehag, og gradvis bygge opp en større klarhet i sinnet som blir vedvarende og stabil. Ler mer" } 
})


Frontpage.register()