import type LoadingModel from "~/types/loading";

export default function useLoading() {
    const initLoading = ()=> {
        return {loading: false}
    }

    const startLoading = (loading: LoadingModel) => {
        loading.loading = true;
    }

    const stopLoading = (loading: LoadingModel) => {
        loading.loading = false;
    }
}