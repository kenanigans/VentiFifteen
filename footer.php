<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the "site-content" div and all content after.
 *
 * @package WordPress
 * @subpackage Ventififteen
 * @since Ventififteen 1.0
 */
?>

	</div><!-- .site-content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<?php
				/**
				 * Fires before the Ventififteen footer text for footer customization.
				 *
				 * @since Ventififteen 1.0
				 */
				do_action( 'ventififteen_credits' );
			?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
			<small><a href="<?php echo esc_url( __( 'https://wordpress.org/', 'ventififteen' ) ); ?>"><?php printf( __( 'Proudly powered by %s', 'ventififteen' ), 'WordPress' ); ?></a> | All media Copyright &copy; 2016 Kenneth Dait, all rights reserved.</small>
		</div><!-- .site-info -->
	</footer><!-- .site-footer -->

</div><!-- .site -->

<?php wp_footer(); ?>

</body>
</html>
