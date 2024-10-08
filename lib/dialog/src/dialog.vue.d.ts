import { PropType } from "vue";
export declare const CptDialogProps:{
	props:{
		modelValue:{
			type:PropType<boolean>,
			required:true,
		},
		width:{
			type:PropType<string>,
			required:false,
		},
		title:{
			type:PropType<string>,
			required:false,
		},
		headBg:{
			type:PropType<string>,
			required:false,
		},
		headColor:{
			type:PropType<string>,
			required:false,
		},
		headShow:{
			type:PropType<boolean>,
			required:false,
		},
		footShow:{
			type:PropType<boolean>,
			required:false,
		},
		bgClose:{
			type:PropType<boolean>,
			required:false,
		},
		leaveText:{
			type:PropType<string>,
			required:false,
		},
		enterText:{
			type:PropType<string>,
			required:false,
		},
		leaveColor:{
			type:PropType<string>,
			required:false,
		},
		enterColor:{
			type:PropType<string>,
			required:false,
		},
		leaveType:{
			type:PropType<string>,
			required:false,
		},
		enterType:{
			type:PropType<string>,
			required:false,
		},
		leaveShow:{
			type:PropType<boolean>,
			required:false,
		},
		enterShow:{
			type:PropType<boolean>,
			required:false,
		}
	},
	emits:{
		'update:modelValue':(value:boolean)=>boolean;
		'close':()=>void;
		'enter':()=>void;
	}

}