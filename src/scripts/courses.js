export function courses() {
	$(document).ready(() => {
		$('#html').on('click', () => {
			$('#page').load('src/components/courses/html.html');	
		});

		$('#css').on('click', () => {
			$('#page').load('src/components/courses/css.html');
		});

		$('#ajax').on('click', () => {
			$('#page').load('src/components/courses/ajax.html');
		});

		$('#bootstrap').on('click', () => {
			$('#page').load('src/components/courses/bootstrap.html');
		});

		$('#jquery').on('click', () => {
			$('#page').load('src/components/courses/jquery.html');
		});

		$('#js').on('click', () => {			
			$('#page').load('src/components/courses/js.html');			
		})
		
		$('#react').on('click', () => { 
			$('#page').load('src/components/courses/react.html');
		});

		$('#mysql').on('click', () => { 
			$('#page').load('src/components/courses/mysql.html');
		});

		$('#php').on('click', () => {
			$('#page').load('src/components/courses/php.html');
		});

		$('#wordpress').on('click', () => {
			$('#page').load('src/components/courses/wordpress.html');
		});
	});
};
