<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: 'Confirmar acción'
        },
        message: {
            type: String,
            default: '¿Estás seguro de realizar esta acción?'
        }
    },
    methods: {
        confirm() {
            this.$emit('confirm');
        },
        cancel() {
            this.$emit('cancel');
        }
    }
};
</script>

<template>
    <div v-if="isVisible" class="modal fade show d-block" tabindex="-1" style="background: rgba(0,0,0,0.5);">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ title }}</h5>
                    <button type="button" class="btn-close" @click="cancel"></button>
                </div>
                <div class="modal-body">
                    <p>{{ message }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="cancel">Cancelar</button>
                    <button type="button" class="btn btn-danger" @click="confirm">Confirmar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.modal {
    display: block;
}
</style>