		jQuery(document).ready(function($) {
		
			var $currentIssue = $('.vol:last .issue:last .issuu-embed'),
				currentIssueUrl = $currentIssue.find('a').attr('href'),
				embedIssuu = function($currentIssue, currentIssueUrl) {
					$.get('../wp-content/themes/magazine/inc/issuu.html', { url : currentIssueUrl }, 
						function(data) {
							$currentIssue.html(data);
						}
					);
				},
				handleClick = function(e, currentIssueUrl, $currentIssue, $this, href) {
					e.preventDefault();
	
					if(currentIssueUrl) {
						embedIssuu($currentIssue, currentIssueUrl);
					}
					
					$this.addClass('current').parent().siblings('li').children('a').removeClass('current');
				};
			
			$('.vol:not(:last-child)').hide();
			$('.vol-nav li:last-child a').addClass('current');
			
			$('.issue:not(:last-child)').hide();
			$('.issues-nav li:last-child a').addClass('current');
		
			embedIssuu($currentIssue, currentIssueUrl);

			$('.vol-nav a').click(function(e) {
				
				var $this = $(this),
					href = $this.attr('href'),
					$currentIssue = $(href).find('.issue:last .issuu-embed'),
					currentIssueUrl = $currentIssue.find('a').attr('href');
						
				handleClick(e, currentIssueUrl, $currentIssue, $this);

				$('.vol:visible').fadeOut('fast', function() {
					$(href).fadeIn();
				});
							
			});
			
			$('.issues-nav a').click(function(e) {
				
				var $this = $(this),
					href = $this.attr('href'),
					$currentIssue = $(href).find('.issuu-embed'),
					currentIssueUrl = $currentIssue.find('a').attr('href');
				
				handleClick(e, currentIssueUrl, $currentIssue, $this);

				$('.issue:visible').fadeOut('fast', function() {
					$(href).fadeIn();
				});
							
			});			
			
		});
