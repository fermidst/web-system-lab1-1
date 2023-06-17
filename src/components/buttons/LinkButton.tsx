import { type FC } from 'react';

const LinkButton: FC<{ path?: string; name?: string }> = ({ path, name }) => (
  <a className="btn btn-primary m-2" href={`/web-system-lab1-1${path}`}>
    {name}
  </a>
);

export default LinkButton;
