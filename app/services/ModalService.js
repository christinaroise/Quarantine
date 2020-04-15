import { showModal } from 'svelte-native'
import { ApiService } from '~/services/ApiService'
import { FilterService } from '~/services/FilterService'
import { SourceService } from '~/services/SourceService'

import Article from '~/modals/Article'
import Newspaper from '~/modals/Newspaper'
import ConfirmedModal from '~/modals/cardModals/ConfirmedModal'
import FilterModal from '~/modals/cardModals/FilterModal'

const utilsModule = require('tns-core-modules/utils/utils')
const api_key = 'dc4286d2d7a04d47bb2ca997c66ecc73' 
// 'e840db49fb1f48c99a39a73ddf05c0a4' 
// 'f015a847676d491f9b581d535c9361ac'

export const ModalService = {
    showArticle: async(item) => {
        await showModal(
            {
                page: Article,
                props:{
                    article:item
                },
            }
        )
    },
    showNewspaper: async(item) => {
        ApiService.get(`https://newsapi.org/v2/everything?domains=${SourceService.trimURLSource(item.url)}&apiKey=${api_key}`).then(async result => {
            let articles = result.articles
            await showModal(
                {
                    page: Newspaper,
                    props:{
                        article:articles,
                        source: item
                    },
                })
            console.log(articles)
        })
    },
    showConfirmedModal: async(item) => {
        await showModal(
            {
                page: ConfirmedModal,
                props:{
                    source:item
                },
            }
        )
    },
    showFilterModal: async(item) => {
        await showModal(
            {
                page: FilterModal,
                props:{
                    source:item
                },
            }
        )
    }
}



/*
const showNewspaper = async (source) => {
    ApiService.get(`https://newsapi.org/v2/everything?domains=${SourceService.trimURL(source.url)}&apiKey=${api_key}`).then(result => {
        console.log(result)
        articles = result.articles
        showModal(
            {
                page: Newspaper,
                props:{
                    source:source,
                    articles: result.articles
                }
            },
        )
    })
} */