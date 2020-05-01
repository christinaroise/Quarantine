import { showModal } from 'svelte-native'
import { ApiService } from './ApiService.js'
import Article from '~/modals/Article'
import Newspaper from '~/modals/Newspaper'
import ConfirmedModal from '~/modals/cardModals/ConfirmedModal'
import FilterModal from '~/modals/cardModals/FilterModal'
import OptionsModal from '~/modals/cardModals/OptionsModal'

const utilsModule = require('tns-core-modules/utils/utils')

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
    showNewspaperModal: async(item) => {
        let articles = []
        ApiService.getNewspaperSourceData(item).then(async (res)=>{
            articles = res.articles
            await showModal(
                {
                    page: Newspaper,
                    props:{
                        articles: articles,
                        source: item
                    },
                })
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
    },
    showOptionsModal: async() => {
        await showModal(
            {
                page: OptionsModal
            }
        )
    }
}