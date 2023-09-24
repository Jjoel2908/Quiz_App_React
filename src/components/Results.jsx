import React from 'react';

export const Results = ({ score, questionsFiltered, onReset }) => {
	return (
		<div 
			className='flex flex-col justify-evenly items-center shadow-xl rounded-lg border w-[500px] h-[500px] gap-5'>
			<h1 className='text-blue-200 text-3xl font-bold'>Resultados</h1>

			<div className='flex flex-col gap-5 text-center text-white text-xl'>
				<span>Acertaste</span>
				<span className='font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl animate-pulse'>
					{((score / questionsFiltered.length) * 100).toFixed(0)}%
				</span>
				de las preguntas ({score} de {questionsFiltered.length})
			</div>

			<button
				className='px-5 py-2 rounded-lg transition-all font-bold text-white bg-gradient-to-r from-yellow-600 to-red-600'
				onClick={onReset}
			>
				Vamos de nuevo
			</button>
		</div>
	);
};
