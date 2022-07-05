import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submitPoll, updateMailingList } from "../helpers";


export const submitMailListThunk = createAsyncThunk(
	"app/submitMailList", 
	async (data, thunkAPI) => {
		thunkAPI.dispatch(showSignupForm(false))
		thunkAPI.dispatch(showDiscountCode(true))
		const response = await updateMailingList(data)
		return response
	}
)

export const submitPollThunk = createAsyncThunk(
	"app/submitPoll", 
	async (data, thunkAPI) => {
		thunkAPI.dispatch(showSummary(false))
		thunkAPI.dispatch(showSignupForm(true))
		const response = await submitPoll(data)
		return response
	}
)

const meals = [
	{
		id: 1,
		title: "Pap (Ogi) and Akara",
		desc: "Hot Nigerian custard and bean cake combo",
		image: "pap_akara",
	},
	{
		id: 2,
		title: "Ekuru and Agidi (Eko)",
		desc: "White Nigerian bean cake and solid pap combo",
		image: "ekuru_eko",
	},
	{
		id: 3,
		title: "Ewa Agoyin and Bread",
		desc: "Classic mashed bean porridge and bread combo",
		image: "ewa_agoyin",
	},
	{
		id: 4,
		title: "Ofada Rice and Egg Sauce",
		desc: "Nigerian fiber-rich local rice and sauce",
		image: "ofada_rice",
	},
	{
		id: 5,
		title: "Yam Porridge and Vegetable",
		desc: "Hot yam porridge garnished with ugwu leaves",
		image: "yam_porridge",
	}
]


export const appSlice = createSlice({
	name: 'app',
	initialState: {
		loading: true,
		ip:null,
		meals: meals,
		selected: {},
		analytics: {},
		response: [],
		isSubmitted: false,
		showForm: false,
		showSummary: false,
		showDiscountCode: false
	},
	reducers: {
		setSelectedMeal: (state, action) => {
			const payload = action.payload
			state.selected = payload
			if(payload.id) state.showSummary = true
		},
		showSummary: (state, action) => {
			const payload = action.payload
			state.showSummary = payload
		},
		showDiscountCode: (state, action) => {
			const payload = action.payload
			state.showDiscountCode = payload
		},
		setLoading: (state, action) => {
			const payload = action.payload
			state.loading = payload
		},
		setResponse: (state, action) => {
			const payload = action.payload
			state.response = payload
		},
		showSignupForm: (state, action) => {
			state.showForm = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
		.addCase(submitPollThunk.fulfilled, (state, action) => {
			state.loading = false
			state.isSubmitted = true
		})
		.addCase(submitPollThunk.rejected, (state, action) => {
			state.loading = false
			state.response = ["error","An error occured!"]
		})
	}
});


export const selectApp = (state) => state.app;

export const { setLoading, setResponse, setSelectedMeal, showSignupForm, showDiscountCode, showSummary } = appSlice.actions

export default appSlice.reducer
