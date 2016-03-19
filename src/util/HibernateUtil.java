package util;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
public class HibernateUtil {
	private static final SessionFactory sessionFactory = buildSessionFactory();

	private static SessionFactory buildSessionFactory() {
		// ����Configuration���󣬵���configure()������ȡhibernate.cfg.xml�е�������Ϣ
		Configuration cfg = new Configuration().configure();
		// ʹ��Configuration���󴴽�������SessionFactory
		return cfg.buildSessionFactory();
	}

	public static SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public static void closeSessionFactory() {
		sessionFactory.close();
	}
}
