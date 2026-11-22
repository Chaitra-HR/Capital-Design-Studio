import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router';
import { founder } from '@/content/founder';
import { cn } from '@/lib/cn';
import styles from './Button.module.css';

type Variant = 'primary' | 'light' | 'link';
type Size = 'md' | 'lg';

interface StyleProps {
  variant?: Variant;
  size?: Size;
  /**
   * Personal call-to-action: on hover the founder's photo slides in on the
   * left and the label rolls up to a second line (shown on touch screens too).
   */
  withAvatar?: boolean;
  children: ReactNode;
}

function classes(variant: Variant, size: Size, className?: string) {
  return cn(styles.button, styles[variant], styles[size], className);
}

/** Hover line, read with the founder's photo: "[Chaitra] + you = the right clients" */
const HOVER_LABEL = '+ you = the right clients';

function Content({ children, withAvatar }: Pick<StyleProps, 'children' | 'withAvatar'>) {
  if (!withAvatar) {
    // Same roll as the hero button, but the label simply rolls into itself
    return (
      <span className={styles.faces}>
        <span className={styles.faceMain}>{children}</span>
        <span className={cn(styles.faceAlt, styles.faceSame)} aria-hidden="true">
          {children}
        </span>
      </span>
    );
  }
  return (
    /* Both faces share one grid cell, so the pill is sized for the wider one
       and never changes width when they swap */
    <span className={styles.faces}>
      <span className={styles.faceMain}>{children}</span>
      <span className={styles.faceAlt} aria-hidden="true">
        <img
          loading="lazy"
          src={founder.photoColor}
          alt=""
          width={40}
          height={40}
          decoding="async"
        />
        {HOVER_LABEL}
      </span>
    </span>
  );
}

export type ButtonProps = StyleProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = 'primary',
  size = 'md',
  withAvatar,
  children,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={classes(variant, size, cn(withAvatar && styles.talk, className))}
      {...props}
    >
      <Content withAvatar={withAvatar}>{children}</Content>
    </button>
  );
}

export type ButtonLinkProps = StyleProps & LinkProps;

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  withAvatar,
  children,
  className,
  ...props
}: ButtonLinkProps) {
  const cls = classes(
    variant,
    size,
    cn(withAvatar && styles.talk, className as string | undefined),
  );

  // Outside links (the booking page) open in a new tab, so the site stays open
  if (typeof props.to === 'string' && /^https?:\/\//.test(props.to)) {
    const { to, ...rest } = props;
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <Content withAvatar={withAvatar}>{children}</Content>
      </a>
    );
  }

  return (
    <Link
      className={classes(
        variant,
        size,
        cn(withAvatar && styles.talk, className as string | undefined),
      )}
      {...props}
    >
      <Content withAvatar={withAvatar}>{children}</Content>
    </Link>
  );
}
