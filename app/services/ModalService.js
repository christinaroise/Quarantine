import { showModal } from 'svelte-native'
import { ApiService } from './ApiService.js'
import Article from '~/modals/Article'
import Newspaper from '~/modals/Newspaper'
import FilterModal from '~/modals/cardModals/FilterModal'
import OptionsModal from '~/modals/cardModals/OptionsModal'
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
    showNewspaperInLibraryModal: async(item) => {
        console.log(item)
        await showModal(
            {
                page: Newspaper,
                props:{
                    articles: item.articles,
                    source: item
                }, 
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
            }
        )
    },
    showLibraryOptionsModal: async() => {
        await showModal(
            {
                page: OptionsModal,
                props:{
                    show:"Show more",
                    list: "Library"
                }
            }
        )
    },
    goToSearch: async (item) => {
        await showModal(
            {
                page: Search,
                props:{
                    sources: item,
                }
            }
        )
    }
}