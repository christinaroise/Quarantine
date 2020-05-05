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
    showConfirmedLibraryModal: async(item) => {
        await showModal(
            {
                page: ConfirmedModal,
                props:{
                    title: item.name,
                    text: "has been added to your library"
                },
            }
        )
    },
    showConfirmedBookmarkModal: async(item) => {
        await showModal(
            {
                page: ConfirmedModal,
                props:{
                    title: item.title,
                    text: "has been added as a bookmark"
                },
            }
        )
    },
    showConfirmedRemoveModal: async(item) =>{
        await showModal(
            {
                page: ConfirmedModal,
                props:{
                    title: item.title,
                    text: "has been removed from list"
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
    showBookmarkOptionsModal: async(item) => {
        await showModal(
            {
                page: OptionsModal,
                props:{
                    show: "Read article",
                    list: "Bookmarks",
                    article: item
                }
            }
        )
    }
}