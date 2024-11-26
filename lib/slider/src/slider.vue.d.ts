import { PropType } from "vue";
export declare const CptSliderProps:{
    props:{
        modelValue:{
            type:PropType<number>,
            required:true,
        },
        min:{
            type:PropType<number>,
            required:false,
        },
        max:{
            type:PropType<number>,
            required:false,
        },
        step:{
            type:PropType<number>,
            required:false,
        },
        showTips:{
            type:PropType<boolean>,
            required:false,
        },
        showStops:{
            type:PropType<boolean>,
            required:false,
        },
        reverse:{
            type:PropType<boolean>,
            required:false,
        },
        vertical:{
            type:PropType<boolean>,
            required:false,
        },
        disabled:{
            type:PropType<boolean>,
            required:false,
        },
        range:{
            type:PropType<boolean>,
            required:false,
        }
    }

}