import { Form } from 'react-router-dom';

// library
import { UserPlusIcon } from '@heroicons/react/24/solid';

// assets
import ilustration from '../assets/illustration.jpg';

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Controle su <span className="accent">dinero</span>
        </h1>
        <p>Tu presupuesto personal es el secreto de la libertad financiera.</p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="Ingrese su nombre"
            aria-label="Tu Nombre"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Crear Cuenta</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={ilustration} alt="Person" width={600} />
    </div>
  );
};

export default Intro;
