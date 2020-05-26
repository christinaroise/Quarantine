import { showModal } from 'svelte-native'
import { ApiService } from './ApiService.js'
import Article from '~/modals/Article'
import Newspaper from '~/modals/Newspaper'
import FilterModal from '~/modals/cardModals/FilterModal'
import Search from '~/modals/Search'

const utilsModule = require('tns-core-modules/utils/utils')

export const ModalService = {
    showArticle: async(item) => {
        await showModal(
            {
                page: Article,
                props:{
                    article: item
                }, 
                fullscreen: true,
                animated: true
            }
        )
    },
    showNewspaperModal: async(item) => {
        let articles = []
        ApiService.getNewspaperSourceData(item).then(async (res) =>{
            articles = res
            await showModal(
                {
                    page: Newspaper,
                    props:{
                        articles: articles,
                        source: item
                    },
                    animated: true,
                    fullscreen: true
                })
        })
    },
    showNewspaperInLibraryModal: async(item) => {
        await showModal(
            {
                page: Newspaper,
                props:{
                    articles: item.articles,
                    source: item
                }, 
                animated: true,
                fullscreen: true
            }
        )
    },
    showFilterModal: async(item) => {
        await showModal(
            {
                page: FilterModal,
                props:{
                    source: item
                },
                animated: true,
            }
        )
    },
    goToSearch: async (item) => {
        await showModal(
            {
                page: Search,
                props:{
                    sources: item,
                },
                fullscreen: true,
                animated: true
            }
        )
    }
}